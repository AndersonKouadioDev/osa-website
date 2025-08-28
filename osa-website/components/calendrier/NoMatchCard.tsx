// components/NoMatchCard.js
export default function NoMatchCard() {
  return (
    <div className="text-center mt-30 py-10 rounded-2xl border border-gray-600 bg-gray-200 shadow-lg">
      <p className="text-xl sm:text-2xl text-gray-400 uppercase">
        Il n'y a aucun match prévu pour le moment.
      </p>
    </div>
  );
}