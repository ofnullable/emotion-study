export default (() => {
  const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

  const values = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width: ${value}px)`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    // return '@media (max-width:'.concat(value - step / 100).concat('px', ')');
    return `@media (max-width: ${value - 5 / 100}px)`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return (
      '@media (min-width:'.concat(values[start]).concat('px', ') and ') +
      '(max-width:'.concat(values[keys[endIndex]] - 5 / 100).concat('px', ')')
    );
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
  };
})();
