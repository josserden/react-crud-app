export const linksVariants = (param, value) => {
  switch (param) {
    case 'website':
      return (
        <a
          className="contactLink"
          href={`https://${value}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {value}
        </a>
      );

    case 'email':
      return (
        <a className="contactLink" href={`mailto:${value}`}>
          {value}
        </a>
      );

    case 'phone':
      return (
        <a className="contactLink" href={`tel:${value}`}>
          {value}
        </a>
      );

    default:
      return null;
  }
};
