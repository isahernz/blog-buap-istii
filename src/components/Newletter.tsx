const Newsletter = () => {
  return (
    <div className="mt-8 rounded-lg bg-blue-100 p-6">
      <h3 className="mb-4 text-xl font-semibold">
        Suscríbete a nuestro Newsletter
      </h3>
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
    </div>
  );
};

export default Newsletter;
