import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          Input inválido
        </h2>
        <p className="text-stone-700 mb-4">
          Opa, parece que vocês esqueceu de inserir um valor
        </p>
        <p className="text-stone-700 mb-4">
          Por favor certifique-se de informar um valor válido em todos os
          campos.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancelar
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Salvar
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Título" />
          <Input ref={description} label="Descrição" textarea />
          <Input type="date" ref={dueDate} label="Prazo" />
        </div>
      </div>
    </>
  );
}
