export const signin = ({ token }) => {
  cookie.set();
};

export const withAuth = async ctx => {
  console.log(ctx);
};
