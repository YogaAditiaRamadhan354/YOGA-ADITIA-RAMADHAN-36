const fs = require('fs');

// Chess HTML
const chess = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Catur Digital Sederhana</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Inter,sans-serif;background:#0a0a1a;color:#e4e4e7;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}
h1{font-size:2rem;font-weight:900;margin-bottom:.5rem;background:linear-gradient(135deg,#06b6d4,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
#s{color:#a1a1aa;margin-bottom:1rem}
.tw{color:#22d3ee;font-weight:700}.tb{color:#c084fc;font-weight:700}
.bw{display:inline-block;padding:12px;background:linear-gradient(135deg,#1e1e3a,#2a2a4a);border-radius:20px;box-shadow:0 20px 60px #00000080;border:1px solid #ffffff10}
.b{display:grid;grid-template-columns:repeat(8,55px);grid-template-rows:repeat(8,55px);border-radius:12px;overflow:hidden}
.cl{width:55px;height:55px;display:flex;align-items:center;justify-content:center;font-size:32px;cursor:pointer;transition:.2s;position:relative;user-select:none}
.cl.l{background:#3b3b5c}.cl.d{background:#1e1e3a}
.cl:hover{filter:brightness(1.3)}
.cl.sel{background:rgba(6,182,212,.35)!important}
.cl.vm::after{content:'';position:absolute;width:14px;height:14px;background:#06b6d466;border-radius:50%}
.cl.vc{background:rgba(248,113,113,.2)!important}
.pw{filter:drop-shadow(0 0 6px #06b6d480)}.pb{filter:drop-shadow(0 0 6px #8b5cf680)}
.ct{margin-top:1rem;display:flex;gap:1rem;justify-content:center}
.btn{padding:10px 24px;border:none;border-radius:12px;font-family:Inter;font-size:.9rem;font-weight:700;cursor:pointer;transition:.2s}
.bp{background:linear-gradient(135deg,#06b6d4,#0891b2);color:#fff}.bp:hover{transform:translateY(-2px)}
.bs{background:#ffffff14;color:#a1a1aa;border:1px solid #ffffff1a}.bs:hover{color:#fff}
a.back{display:inline-block;margin-top:1rem;color:#06b6d4;text-decoration:none;font-weight:600}
</style>
</head>
<body>
<div style="position:relative;z-index:1;text-align:center">
<h1>\u265A Catur Digital Sederhana</h1>
<div id="s">Giliran: <span class="tw">Putih</span></div>
<div class="bw"><div id="b" class="b"></div></div>
<div class="ct">
<button class="btn bp" onclick="reset()">New Game</button>
<button class="btn bs" onclick="undo()">Undo</button>
</div>
<a class="back" href="/">\u2190 Kembali ke Portfolio</a>
</div>
<script>
const P={K:'\u2654',Q:'\u2655',R:'\u2656',B:'\u2657',N:'\u2658',P:'\u2659',k:'\u265A',q:'\u265B',r:'\u265C',b:'\u265D',n:'\u265E',p:'\u265F'};
let bd,sel,turn,vm,hist;
function init(){return[
['r','n','b','q','k','b','n','r'],
['p','p','p','p','p','p','p','p'],
['','','','','','','',''],['','','','','','','',''],
['','','','','','','',''],['','','','','','','',''],
['P','P','P','P','P','P','P','P'],
['R','N','B','Q','K','B','N','R']]}
function isW(p){return p&&p===p.toUpperCase()}
function own(p){return turn==='w'?isW(p):p&&!isW(p)}
function moves(r,c){
let p=bd[r][c];if(!p)return[];
let t=p.toUpperCase(),w=isW(p),m=[];
let dirs={R:[[0,1],[0,-1],[1,0],[-1,0]],B:[[1,1],[1,-1],[-1,1],[-1,-1]],
Q:[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]};
if(t==='P'){let d=w?-1:1,s=w?6:1;
if(bd[r+d]&&bd[r+d][c]===''){m.push([r+d,c]);if(r===s&&bd[r+2*d][c]==='')m.push([r+2*d,c])}
[-1,1].forEach(dc=>{let nr=r+d,nc=c+dc;if(nr>=0&&nr<8&&nc>=0&&nc<8&&bd[nr][nc]&&isW(bd[nr][nc])!==w)m.push([nr,nc])})}
if(t==='N')[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>{
let nr=r+dr,nc=c+dc;if(nr>=0&&nr<8&&nc>=0&&nc<8&&(bd[nr][nc]===''||isW(bd[nr][nc])!==w))m.push([nr,nc])});
if(t==='K')for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){
if(!dr&&!dc)continue;let nr=r+dr,nc=c+dc;
if(nr>=0&&nr<8&&nc>=0&&nc<8&&(bd[nr][nc]===''||isW(bd[nr][nc])!==w))m.push([nr,nc])}
if(dirs[t])dirs[t].forEach(([dr,dc])=>{let nr=r+dr,nc=c+dc;
while(nr>=0&&nr<8&&nc>=0&&nc<8){if(bd[nr][nc]==='')m.push([nr,nc]);
else{if(isW(bd[nr][nc])!==w)m.push([nr,nc]);break}nr+=dr;nc+=dc}});
return m}
function render(){let el=document.getElementById('b');el.innerHTML='';
for(let r=0;r<8;r++)for(let c=0;c<8;c++){
let d=document.createElement('div');d.className='cl '+((r+c)%2===0?'l':'d');
if(sel&&sel[0]===r&&sel[1]===c)d.classList.add('sel');
if(vm.some(v=>v[0]===r&&v[1]===c))d.classList.add(bd[r][c]?'vc':'vm');
if(bd[r][c]){d.textContent=P[bd[r][c]];d.classList.add(isW(bd[r][c])?'pw':'pb')}
d.onclick=(()=>{let rr=r,cc=c;return()=>click(rr,cc)})();el.appendChild(d)}}
function click(r,c){
if(sel&&vm.some(v=>v[0]===r&&v[1]===c)){doMove(sel[0],sel[1],r,c);return}
if(bd[r][c]&&own(bd[r][c])){sel=[r,c];vm=moves(r,c);render();return}
sel=null;vm=[];render()}
function doMove(fr,fc,tr,tc){
let cap=bd[tr][tc];hist.push({f:[fr,fc],t:[tr,tc],p:bd[fr][fc],c:cap});
let mp=bd[fr][fc];if(mp==='P'&&tr===0)mp='Q';if(mp==='p'&&tr===7)mp='q';
bd[tr][tc]=mp;bd[fr][fc]='';
if(cap==='K'||cap==='k'){sel=null;vm=[];render();
document.getElementById('s').innerHTML=(cap==='K'?'<span class="tb">Hitam Menang!</span>':'<span class="tw">Putih Menang!</span>');return}
turn=turn==='w'?'b':'w';sel=null;vm=[];render();
document.getElementById('s').innerHTML='Giliran: '+(turn==='w'?'<span class="tw">Putih</span>':'<span class="tb">Hitam</span>')}
function undo(){if(!hist.length)return;let l=hist.pop();
bd[l.f[0]][l.f[1]]=l.p;bd[l.t[0]][l.t[1]]=l.c;
turn=isW(l.p)?'w':'b';sel=null;vm=[];render();
document.getElementById('s').innerHTML='Giliran: '+(turn==='w'?'<span class="tw">Putih</span>':'<span class="tb">Hitam</span>')}
function reset(){bd=init();sel=null;turn='w';vm=[];hist=[];render();
document.getElementById('s').innerHTML='Giliran: <span class="tw">Putih</span>'}
reset();
</script>
</body>
</html>`;

// Calculator HTML
const calc = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Kalkulator Digital Sederhana</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Inter,sans-serif;background:#0a0a1a;color:#e4e4e7;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}
h1{font-size:1.8rem;font-weight:900;margin-bottom:1.5rem;background:linear-gradient(135deg,#06b6d4,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.calc{width:320px;padding:24px;background:linear-gradient(135deg,#1e1e3a,#2a2a4a);border-radius:28px;box-shadow:0 20px 60px #00000080,0 0 40px #06b6d414;border:1px solid #ffffff10}
.display{background:#0a0a1a;border-radius:18px;padding:20px 24px;margin-bottom:20px;text-align:right;border:1px solid #06b6d430;min-height:100px;display:flex;flex-direction:column;justify-content:flex-end}
.expr{font-size:14px;color:#71717a;margin-bottom:8px;min-height:20px;word-break:break-all}
.result{font-size:2.5rem;font-weight:900;color:#22d3ee;text-shadow:0 0 20px #06b6d440;word-break:break-all}
.buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.btn{height:58px;border:none;border-radius:14px;font-family:Inter;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center}
.btn:hover{transform:scale(1.05)}
.btn:active{transform:scale(0.95)}
.num{background:#2a2a4a;color:#e4e4e7;border:1px solid #ffffff10}
.num:hover{background:#3b3b5c}
.op{background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:#fff}
.op:hover{background:linear-gradient(135deg,#9d74f7,#8b5cf6)}
.func{background:#3b3b5c;color:#f87171;font-size:1rem}
.func:hover{background:#4a4a6a}
.eq{background:linear-gradient(135deg,#06b6d4,#0891b2);color:#fff;font-size:1.3rem}
.eq:hover{background:linear-gradient(135deg,#22d3ee,#06b6d4)}
.zero{grid-column:span 2}
a.back{display:inline-block;margin-top:1.5rem;color:#06b6d4;text-decoration:none;font-weight:600;font-size:.9rem}
a.back:hover{opacity:.7}
</style>
</head>
<body>
<h1>Kalkulator Digital Sederhana</h1>
<div class="calc">
<div class="display">
<div class="expr" id="expr"></div>
<div class="result" id="result">0</div>
</div>
<div class="buttons">
<button class="btn func" onclick="clearAll()">AC</button>
<button class="btn func" onclick="toggleSign()">\u00B1</button>
<button class="btn func" onclick="percent()">%</button>
<button class="btn op" onclick="setOp('\u00F7')">\u00F7</button>
<button class="btn num" onclick="addNum('7')">7</button>
<button class="btn num" onclick="addNum('8')">8</button>
<button class="btn num" onclick="addNum('9')">9</button>
<button class="btn op" onclick="setOp('\u00D7')">\u00D7</button>
<button class="btn num" onclick="addNum('4')">4</button>
<button class="btn num" onclick="addNum('5')">5</button>
<button class="btn num" onclick="addNum('6')">6</button>
<button class="btn op" onclick="setOp('-')">-</button>
<button class="btn num" onclick="addNum('1')">1</button>
<button class="btn num" onclick="addNum('2')">2</button>
<button class="btn num" onclick="addNum('3')">3</button>
<button class="btn op" onclick="setOp('+')">+</button>
<button class="btn num zero" onclick="addNum('0')">0</button>
<button class="btn num" onclick="addDot()">.</button>
<button class="btn eq" onclick="calculate()">=</button>
</div>
</div>
<a class="back" href="/">\u2190 Kembali ke Portfolio</a>
<script>
let cur='0',prev='',op='',newNum=true;
function update(){
document.getElementById('result').textContent=cur;
document.getElementById('expr').textContent=prev?(prev+' '+op):''}
function addNum(n){
if(newNum){cur=n;newNum=false}
else{if(cur==='0'&&n!=='.')cur=n;else cur+=n}
update()}
function addDot(){if(!cur.includes('.')){cur+='.';newNum=false;update()}}
function setOp(o){if(prev&&!newNum)calculate();prev=cur;op=o;newNum=true;update()}
function calculate(){
if(!prev||newNum)return;
let a=parseFloat(prev),b=parseFloat(cur),r=0;
if(op==='+')r=a+b;
else if(op==='-')r=a-b;
else if(op==='\u00D7')r=a*b;
else if(op==='\u00F7')r=b!==0?a/b:'Error';
if(typeof r==='number'){r=Math.round(r*1e10)/1e10;cur=r.toString()}
else cur=r;
prev='';op='';newNum=true;update()}
function clearAll(){cur='0';prev='';op='';newNum=true;update()}
function toggleSign(){cur=(parseFloat(cur)*-1).toString();update()}
function percent(){cur=(parseFloat(cur)/100).toString();update()}
update();
</script>
</body>
</html>`;

fs.writeFileSync('public/chess.html', chess, 'utf8');
fs.writeFileSync('public/calculator.html', calc, 'utf8');
console.log('Created chess.html and calculator.html successfully!');
