import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const getPasswordStrength = (pw) => {
        if (pw.length === 0) return { score: 0, label: '', color: 'transparent' };
        if (pw.length < 6) return { score: 1, label: 'Lemah', color: '#ef4444' };
        if (pw.length < 10) return { score: 2, label: 'Sedang', color: '#f59e0b' };
        return { score: 3, label: 'Kuat', color: '#22c55e' };
    };

    const strength = getPasswordStrength(password);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== passwordConfirm) {
            setError('Password tidak cocok. Coba lagi.');
            return;
        }
        if (password.length < 8) {
            setError('Password minimal 8 karakter.');
            return;
        }
        setLoading(true);
        try {
            await register(name, email, password, passwordConfirm);
            navigate('/admin/dashboard');
        } catch (err) {
            const data = err.response?.data;
            if (data?.errors) {
                // Get the first error message from the object
                const firstError = Object.values(data.errors)[0][0];
                setError(firstError);
            } else {
                setError(data?.message || 'Registrasi gagal. Email mungkin sudah terdaftar.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.blob1} />
            <div style={styles.blob2} />

            <div style={styles.card}>
                {/* Left Panel */}
                <div style={styles.leftPanel}>
                    <div style={styles.leftContent}>
                        <div style={styles.logoMark}>
                            <div style={styles.logoInner} />
                        </div>
                        <h1 style={styles.brandName}>YogaditiaR</h1>
                        <p style={styles.brandTagline}>User Portal</p>
                        <div style={styles.divider} />
                        <p style={styles.brandDesc}>
                            Buat akun untuk bergabung dengan ekosistem aplikasi kami dan nikmati semua fiturnya.
                        </p>
                        <div style={styles.stepList}>
                            {[
                                { num: '01', label: 'Buat akun gratis' },
                                { num: '02', label: 'Login ke dashboard' },
                                { num: '03', label: 'Kelola konten' },
                            ].map((step, i) => (
                                <div key={i} style={styles.stepItem}>
                                    <div style={styles.stepNum}>{step.num}</div>
                                    <span style={styles.stepLabel}>{step.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={styles.leftFooter}>
                        <span style={styles.leftFooterText}>© 2025 YogaditiaR. All rights reserved.</span>
                    </div>
                </div>

                {/* Right Panel */}
                <div style={styles.rightPanel}>
                    <div style={styles.formContainer}>
                        <div style={styles.formHeader}>
                            <h2 style={styles.formTitle}>Buat Akun ✨</h2>
                            <p style={styles.formSubtitle}>Daftarkan diri Anda sekarang</p>
                        </div>

                        <form onSubmit={handleSubmit} style={styles.form}>
                            {error && (
                                <div style={styles.errorBox}>
                                    <AlertCircle size={16} color="#f87171" />
                                    <span style={styles.errorText}>{error}</span>
                                </div>
                            )}

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Nama Lengkap</label>
                                <input
                                    id="register-name"
                                    type="text"
                                    required
                                    placeholder="Yoga Aditia Ramadhan"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={styles.input}
                                    onFocus={e => e.target.style.borderColor = '#818cf8'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                />
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Email Address</label>
                                <input
                                    id="register-email"
                                    type="email"
                                    required
                                    placeholder="nama@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                    onFocus={e => e.target.style.borderColor = '#818cf8'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                />
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Password</label>
                                <div style={styles.passwordWrapper}>
                                    <input
                                        id="register-password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        placeholder="Min. 8 karakter"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{...styles.input, paddingRight: '48px'}}
                                        onFocus={e => e.target.style.borderColor = '#818cf8'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
                                        {showPassword ? <EyeOff size={18} color="#71717a" /> : <Eye size={18} color="#71717a" />}
                                    </button>
                                </div>
                                {password.length > 0 && (
                                    <div style={styles.strengthWrapper}>
                                        <div style={styles.strengthBars}>
                                            {[1, 2, 3].map(i => (
                                                <div key={i} style={{
                                                    ...styles.strengthBar,
                                                    background: i <= strength.score ? strength.color : 'rgba(255,255,255,0.08)'
                                                }} />
                                            ))}
                                        </div>
                                        <span style={{...styles.strengthLabel, color: strength.color}}>{strength.label}</span>
                                    </div>
                                )}
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Konfirmasi Password</label>
                                <div style={styles.passwordWrapper}>
                                    <input
                                        id="register-password-confirm"
                                        type={showPasswordConfirm ? 'text' : 'password'}
                                        required
                                        placeholder="Ulangi password"
                                        value={passwordConfirm}
                                        onChange={(e) => setPasswordConfirm(e.target.value)}
                                        style={{
                                            ...styles.input, paddingRight: '48px',
                                            borderColor: passwordConfirm && password === passwordConfirm
                                                ? 'rgba(34,197,94,0.5)'
                                                : passwordConfirm ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'
                                        }}
                                        onFocus={e => e.target.style.borderColor = '#818cf8'}
                                        onBlur={e => e.target.style.borderColor = passwordConfirm && password === passwordConfirm ? 'rgba(34,197,94,0.5)' : passwordConfirm ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}
                                    />
                                    <button type="button" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} style={styles.eyeBtn}>
                                        {showPasswordConfirm ? <EyeOff size={18} color="#71717a" /> : <Eye size={18} color="#71717a" />}
                                    </button>
                                    {passwordConfirm && password === passwordConfirm && (
                                        <div style={styles.matchIcon}>
                                            <CheckCircle size={18} color="#22c55e" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                id="register-submit"
                                type="submit"
                                disabled={loading}
                                style={{...styles.submitBtn, opacity: loading ? 0.7 : 1}}
                            >
                                {loading ? (
                                    <><Loader2 size={18} style={{animation: 'spin 1s linear infinite'}} /> Mendaftarkan...</>
                                ) : (
                                    <><UserPlus size={18} /> Buat Akun</>
                                )}
                            </button>
                        </form>

                        <div style={styles.loginLink}>
                            <span style={styles.loginText}>Sudah punya akun? </span>
                            <Link to="/admin/login" style={styles.linkBtn}>Masuk sekarang</Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
            `}</style>
        </div>
    );
};

const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #09090b 0%, #0f0f1a 50%, #09090b 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: 'relative', overflow: 'hidden', padding: '20px',
    },
    blob1: {
        position: 'fixed', top: '-200px', right: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        animation: 'blob 8s ease-in-out infinite', pointerEvents: 'none',
    },
    blob2: {
        position: 'fixed', bottom: '-200px', left: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        animation: 'blob 10s ease-in-out infinite reverse', pointerEvents: 'none',
    },
    card: {
        display: 'flex', width: '100%', maxWidth: '960px',
        borderRadius: '24px', overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
        position: 'relative', zIndex: 1,
    },
    leftPanel: {
        flex: 1,
        background: 'linear-gradient(145deg, #2d1b69 0%, #4a1d96 50%, #2d1b69 100%)',
        padding: '48px 40px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', minWidth: '280px',
    },
    leftContent: { flex: 1 },
    logoMark: {
        width: '52px', height: '52px', borderRadius: '14px',
        background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px',
    },
    logoInner: { width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)' },
    brandName: { fontSize: '28px', fontWeight: '900', color: '#fff', margin: '0 0 4px 0', letterSpacing: '-0.5px' },
    brandTagline: { fontSize: '14px', color: 'rgba(196,181,253,0.7)', margin: '0 0 24px 0', textTransform: 'uppercase', letterSpacing: '2px' },
    divider: { width: '40px', height: '2px', background: 'rgba(196,181,253,0.4)', borderRadius: '2px', marginBottom: '20px' },
    brandDesc: { fontSize: '15px', color: 'rgba(221,214,254,0.8)', lineHeight: '1.7', marginBottom: '32px' },
    stepList: { display: 'flex', flexDirection: 'column', gap: '16px' },
    stepItem: { display: 'flex', alignItems: 'center', gap: '12px' },
    stepNum: {
        width: '32px', height: '32px', borderRadius: '8px',
        background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '11px', fontWeight: '700', color: '#c4b5fd', flexShrink: 0,
    },
    stepLabel: { fontSize: '14px', color: 'rgba(221,214,254,0.8)' },
    leftFooter: { paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' },
    leftFooterText: { fontSize: '12px', color: 'rgba(196,181,253,0.4)' },
    rightPanel: {
        flex: '1.2', background: '#111113', padding: '48px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    formContainer: { width: '100%', maxWidth: '400px' },
    formHeader: { marginBottom: '32px' },
    formTitle: { fontSize: '28px', fontWeight: '800', color: '#fff', margin: '0 0 8px 0', letterSpacing: '-0.5px' },
    formSubtitle: { fontSize: '14px', color: '#71717a', margin: 0 },
    form: { display: 'flex', flexDirection: 'column', gap: '18px' },
    errorBox: {
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '12px 16px',
        background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '12px',
    },
    errorText: { fontSize: '13px', color: '#f87171' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '13px', fontWeight: '500', color: '#a1a1aa' },
    input: {
        width: '100%', padding: '14px 16px', boxSizing: 'border-box',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px', color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s',
    },
    passwordWrapper: { position: 'relative' },
    eyeBtn: {
        position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
        background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    matchIcon: {
        position: 'absolute', right: '44px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', alignItems: 'center',
    },
    strengthWrapper: { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' },
    strengthBars: { display: 'flex', gap: '4px', flex: 1 },
    strengthBar: { flex: 1, height: '4px', borderRadius: '2px', transition: 'background 0.3s' },
    strengthLabel: { fontSize: '11px', fontWeight: '600', minWidth: '40px' },
    submitBtn: {
        width: '100%', padding: '14px', borderRadius: '12px',
        background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
        border: 'none', color: '#fff', fontSize: '15px', fontWeight: '700',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        transition: 'opacity 0.2s', boxShadow: '0 4px 20px rgba(139,92,246,0.35)',
    },
    loginLink: { marginTop: '24px', textAlign: 'center' },
    loginText: { fontSize: '14px', color: '#71717a' },
    linkBtn: { color: '#a78bfa', fontWeight: '600', textDecoration: 'none', fontSize: '14px' },
};

export default Register;
