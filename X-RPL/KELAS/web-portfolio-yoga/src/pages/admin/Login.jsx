import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn, Loader2, AlertCircle } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate('/admin/dashboard');
        } catch (err) {
            const data = err.response?.data;
            if (data?.errors) {
                const firstError = Object.values(data.errors)[0][0];
                setError(firstError);
            } else {
                setError(data?.message || 'Email atau password salah. Coba lagi.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            {/* Background blobs */}
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
                            Kelola konten portofolio, proyek, dan pesan masuk dari satu tempat yang aman.
                        </p>
                        <div style={styles.featureList}>
                            {['Manajemen Proyek', 'Pesan & Kontak', 'Profil & Bio'].map((f, i) => (
                                <div key={i} style={styles.featureItem}>
                                    <div style={styles.featureDot} />
                                    <span style={styles.featureText}>{f}</span>
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
                            <h2 style={styles.formTitle}>Selamat Datang 👋</h2>
                            <p style={styles.formSubtitle}>Masuk untuk melanjutkan</p>
                        </div>

                        <form onSubmit={handleSubmit} style={styles.form}>
                            {error && (
                                <div style={styles.errorBox}>
                                    <AlertCircle size={16} color="#f87171" />
                                    <span style={styles.errorText}>{error}</span>
                                </div>
                            )}

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Email Address</label>
                                <input
                                    id="login-email"
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
                                        id="login-password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{...styles.input, paddingRight: '48px'}}
                                        onFocus={e => e.target.style.borderColor = '#818cf8'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={styles.eyeBtn}
                                    >
                                        {showPassword ? <EyeOff size={18} color="#71717a" /> : <Eye size={18} color="#71717a" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                id="login-submit"
                                type="submit"
                                disabled={loading}
                                style={{...styles.submitBtn, opacity: loading ? 0.7 : 1}}
                            >
                                {loading ? (
                                    <><Loader2 size={18} className="animate-spin" style={{animation: 'spin 1s linear infinite'}} /> Memproses...</>
                                ) : (
                                    <><LogIn size={18} /> Masuk</>
                                )}
                            </button>
                        </form>

                        <div style={styles.registerLink}>
                            <span style={styles.registerText}>Belum punya akun? </span>
                            <Link to="/admin/register" style={styles.linkBtn}>Daftar sekarang</Link>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
    },
    blob1: {
        position: 'fixed', top: '-200px', left: '-200px',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        animation: 'blob 8s ease-in-out infinite',
        pointerEvents: 'none',
    },
    blob2: {
        position: 'fixed', bottom: '-200px', right: '-200px',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        animation: 'blob 10s ease-in-out infinite reverse',
        pointerEvents: 'none',
    },
    card: {
        display: 'flex',
        width: '100%',
        maxWidth: '900px',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
        position: 'relative',
        zIndex: 1,
    },
    leftPanel: {
        flex: 1,
        background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: '300px',
    },
    leftContent: { flex: 1 },
    logoMark: {
        width: '52px', height: '52px',
        borderRadius: '14px',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '24px',
    },
    logoInner: {
        width: '28px', height: '28px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #a5b4fc, #818cf8)',
    },
    brandName: { fontSize: '28px', fontWeight: '900', color: '#fff', margin: '0 0 4px 0', letterSpacing: '-0.5px' },
    brandTagline: { fontSize: '14px', color: 'rgba(165,180,252,0.7)', margin: '0 0 24px 0', textTransform: 'uppercase', letterSpacing: '2px' },
    divider: { width: '40px', height: '2px', background: 'rgba(165,180,252,0.4)', borderRadius: '2px', marginBottom: '20px' },
    brandDesc: { fontSize: '15px', color: 'rgba(199,210,254,0.8)', lineHeight: '1.7', marginBottom: '32px' },
    featureList: { display: 'flex', flexDirection: 'column', gap: '12px' },
    featureItem: { display: 'flex', alignItems: 'center', gap: '10px' },
    featureDot: { width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #a5b4fc, #818cf8)', flexShrink: 0 },
    featureText: { fontSize: '14px', color: 'rgba(199,210,254,0.8)' },
    leftFooter: { paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' },
    leftFooterText: { fontSize: '12px', color: 'rgba(165,180,252,0.4)' },
    rightPanel: {
        flex: '1.2',
        background: '#111113',
        padding: '48px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: { width: '100%', maxWidth: '380px' },
    formHeader: { marginBottom: '32px' },
    formTitle: { fontSize: '28px', fontWeight: '800', color: '#fff', margin: '0 0 8px 0', letterSpacing: '-0.5px' },
    formSubtitle: { fontSize: '14px', color: '#71717a', margin: 0 },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    errorBox: {
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '12px 16px',
        background: 'rgba(248,113,113,0.08)',
        border: '1px solid rgba(248,113,113,0.2)',
        borderRadius: '12px',
    },
    errorText: { fontSize: '13px', color: '#f87171' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { fontSize: '13px', fontWeight: '500', color: '#a1a1aa' },
    input: {
        width: '100%', padding: '14px 16px', boxSizing: 'border-box',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        color: '#fff', fontSize: '14px',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    passwordWrapper: { position: 'relative' },
    eyeBtn: {
        position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
        background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    submitBtn: {
        width: '100%', padding: '14px', borderRadius: '12px',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        border: 'none', color: '#fff', fontSize: '15px', fontWeight: '700',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        transition: 'opacity 0.2s, transform 0.1s',
        boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
    },
    registerLink: { marginTop: '24px', textAlign: 'center' },
    registerText: { fontSize: '14px', color: '#71717a' },
    linkBtn: { color: '#818cf8', fontWeight: '600', textDecoration: 'none', fontSize: '14px' },
};

export default Login;
