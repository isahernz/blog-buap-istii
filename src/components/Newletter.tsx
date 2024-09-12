const Newsletter = () => {
  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Tu correo electrónico"
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2"
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
      >
        Suscribirse
      </button>
    </form>
  );
};

export default Newsletter;
