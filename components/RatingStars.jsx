export default function RatingStars({ rating, label, copy }) {
  const rounded = Math.round(rating);
  const ariaLabel = copy.ariaLabel
    .replace('{label}', label)
    .replace('{rating}', rating.toFixed(1));

  return (
    <span className="flex items-center gap-1" aria-label={ariaLabel}>
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rounded ? '/assets/img/star.png' : '/assets/img/empty_star.png'}
          alt={index < rounded ? copy.filledAlt : copy.emptyAlt}
          className="h-4 w-4"
        />
      ))}
    </span>
  );
}
