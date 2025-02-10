import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function ({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="Uma lista vazia de tarefas"
        className="w-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        Nenhum projeto selecionado
      </h2>
      <p className="text-stone-400 mb-4">
        Selecione um projeto ou começe um novo
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Criar novo projeto</Button>
      </p>
    </div>
  );
}
