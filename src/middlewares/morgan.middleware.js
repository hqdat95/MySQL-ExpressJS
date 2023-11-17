import morgan from 'morgan';

export default () => {
  return morgan('dev', {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  });
};
