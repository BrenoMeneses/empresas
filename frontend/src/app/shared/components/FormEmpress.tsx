
export function FormEmpress() {
    return (
        <form className="container">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
        </form>

    )
}