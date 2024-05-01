import LoginForm from "../../components/LoginForm";

export default async function Login(): Promise<JSX.Element> {
  return (
    <section>
      <LoginForm />
    </section>
  );
}
