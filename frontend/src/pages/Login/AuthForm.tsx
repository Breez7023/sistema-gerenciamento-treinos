import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthPageComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [currentForm, setCurrentForm] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      await api.post("/auth/login", {
        email,
        password,
      });

      navigate("/dashboard");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Erro ao fazer login";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      await api.post("/auth/login", {
        email,
        password,
      });

      navigate("/dashboard");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error?.message || "Erro ao registrar";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const typeForm = [
    {
      id: "login",
    },
    {
      id: "register",
    },
  ];

  function handleForm() {
    setCurrentForm((prev) => (prev >= typeForm.length - 1 ? 0 : prev + 1));
  }

  return (
    <div>
      {typeForm[currentForm].id === "login" && (
        <div className="pt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Entrar</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <Input
              className="h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />

            <Input
              className="h-12"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Senha"
            />

            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                Manter login
              </div>

              <a href="#" className="hover:underline">
                Esqueci a senha
              </a>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-700 hover:bg-violet-600"
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>

            <div className="flex justify-center mt-3">
              <Button
                type="button"
                className="bg-white text-black hover:bg-gray-200"
              >
                <FcGoogle />
                Entrar pelo Google
              </Button>
            </div>

            <div className="mt-3 pt-10 text-center">
              <Button
                type="button"
                onClick={handleForm}
                className="bg-transparent hover:bg-transparent text-gray-400 hover:underline"
              >
                Criar uma conta
              </Button>
            </div>
          </form>
        </div>
      )}

      {typeForm[currentForm].id === "register" && (
        <div className="pt-12">
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white">Registrar</h2>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded">
                {error}
              </div>
            )}

            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nome"
            />

            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Senha"
            />

            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirmar senha"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-700 hover:bg-violet-600"
            >
              {loading ? "Registrando..." : "Criar conta"}
            </Button>

            <div className="text-center">
              <Button
                type="button"
                onClick={handleForm}
                className="bg-transparent hover:bg-transparent text-gray-400 hover:underline"
              >
                Já possuo uma conta
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export const AuthForm = memo(AuthPageComponent);
