import { Layout } from "~/components/layout";
import { useNavigate } from "@remix-run/react";

export default function Index() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className={`flex flex-col gap-6 justify-center h-screen w-screen bg-lightGreen`}>
        <p className="font-medium text-center text-white text-[100px]">Bienvenue John !</p>
        <div onClick={() => navigate(`/projects`)} className="font-medium text-center">
          <p className="hover:shadow-md cursor-pointer bg-white rounded-full p-2 w-[250px] mx-auto">Accèder à mes projets</p>
        </div>
      </div>
    </Layout>
  );
}
