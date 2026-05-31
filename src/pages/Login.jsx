function Login() {
    return (
        <section className="page">
            <div className="login-box">
                <h1>Inicio de sesión</h1>

                <p className="muted">
                    Pantalla visual del sistema. En esta fase todavía no hay conexión con
                    backend.
                </p>

                <label>Correo electrónico</label>
                <input type="email" placeholder="usuario@correo.com" />

                <label>Contraseña</label>
                <input type="password" placeholder="Ingrese su contraseña" />

                <button className="btn-primary full">Ingresar</button>
            </div>
        </section>
    );
}

export default Login;