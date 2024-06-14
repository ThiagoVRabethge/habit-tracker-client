'use client';

import api from '@/services/api';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [login, setLogin] = useState();

  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    api
      .post("/login", {
        "login": login,
        "password": password
      })
      .then((response) => {
        console.log("success");
      })
  }

  return (
    <main className="container d-flex vh-100 vw-100 justify-content-center align-items-center">
      <div className="row">
        <div className="col-6 mb-3">
          <h3>Entrar</h3>
        </div>

        <form onSubmit={(e) => handleLogin(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-3">
              <Link href="/">
                Ainda não possui uma conta?
              </Link>
            </div>

            <button className="btn btn-sm btn-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
