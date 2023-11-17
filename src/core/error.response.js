import { Reason, Status } from '../constants';

class ERROR extends Error {
  constructor(message, status) {
    super(message);

    this.status = status;
  }
}

export class BadRequest extends ERROR {
  constructor(message = Reason.BAD_REQUEST, status = Status.BAD_REQUEST) {
    super(message, status);
  }
}

export class Unauthorized extends ERROR {
  constructor(message = Reason.UNAUTHORIZED, status = Status.UNAUTHORIZED) {
    super(message, status);
  }
}

export class Forbidden extends ERROR {
  constructor(message = Reason.FORBIDDEN, status = Status.FORBIDDEN) {
    super(message, status);
  }
}

export class NotFound extends ERROR {
  constructor(message = Reason.NOT_FOUND, status = Status.NOT_FOUND) {
    super(message, status);
  }
}

export class Conflict extends ERROR {
  constructor(message = Reason.CONFLICT, status = Status.CONFLICT) {
    super(message, status);
  }
}

export class UnprocessableEntity extends Error {
  constructor(message = Reason.UNPROCESSABLE_ENTITY, status = Status.UNPROCESSABLE_ENTITY) {
    super(message, status);
  }
}
