export default function DoubleTrait({className}: {className?: string}) {
    return (
        <div className={className}>
          <div className="w-6 sm:w-8 md:w-16 h-2 bg-purple-700 rounded"></div>
          <div className="w-6 sm:w-8 md:w-16 h-2 bg-yellow-400 rounded"></div>
        </div>
    );
}