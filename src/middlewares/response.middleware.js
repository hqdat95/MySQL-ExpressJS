import { Success } from '../core/success.response';

export default (req, res, next) => {
  res.ok = function (data) {
    res.success.ok(data);
  };

  res.created = function (data) {
    res.success.created(data);
  };

  res.success = new Success(res);

  next();
};
