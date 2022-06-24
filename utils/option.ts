/**
 * Internal representation of an abstract Some/None value.
 * Cannot be used directly, nor should you try!
 * @internal
 * @see {@link Option}
 */
abstract class OptionalValue<T> {
  abstract unwrap(): T;
  abstract isSome(): boolean;
  abstract isNone(): boolean;
}

/**
 * Internal representation of an Optional `None` value.
 * Should not be used directly.
 * @internal
 * @see {@link Option}
 */
class None<T> implements OptionalValue<T> {
  isNone(): boolean {
    return true;
  }

  isSome(): boolean {
    return false;
  }

  unwrap(): T {
    throw new Error("Cannot unwrap None value");
  }
}

/**
 * Internal representation of an Optional `Some` value.
 * Should not be used directly.
 * @internal
 * @see {@link Option}
 */
class Some<T> implements OptionalValue<T> {
  private readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  isNone(): boolean {
    return false;
  }

  isSome(): boolean {
    return true;
  }

  unwrap(): T {
    return this.value;
  }
}

/**
 * Typescript emulation of a two-branch sum-type. Intended to be safe alternative
 * to possibly undefined and null values. Any type of data can be wrapped in an
 * `Option<T>` value, which allows you to safely ask whether or not the wrapper
 * contains the value you are expecting or not.
 *
 *
 * To construct a new Option wrapper, just call
 * ```
 * new Option(undefined)
 * ```
 * or
 *
 * ```
 * new Option(data)
 * ```
 * You are then able to use the provided methods to access the data that may/may not
 * be inside safely.
 * The primary usage is to call `isSome()` or `isNone()` to check the state of
 * the internal data. You can then call `unwrap()` to retrieve the inner data if the
 * value is Some<T>.
 *
 * However this is still a somewhat unsafe operation because nothing actually prevents
 * you from calling `unwrap()` without first having checked the data. This will
 * particular scenario will throw an error at you.
 *
 * It is recommended instead to use `unwrapOr()` or `unwrapOrElse()` which conditionally
 * unwraps the data if it is `Some`, and allows you to provide a default value
 * or a closure to compute one if it is `None`, meaning the data read is always safe.
 */
export default class Option<T> {
  private content: OptionalValue<T>;

  private static isNumerical(value: unknown): value is number {
    return typeof value === "number";
  }

  constructor(value: T | undefined) {
    if (
      value === undefined ||
      value === null ||
      (Option.isNumerical(value) && isNaN(value))
    ) {
      this.content = new None();
    } else {
      this.content = new Some(value);
    }
  }

  /**
   * Return whether this Option contains data
   */
  public isSome() {
    return this.content.isSome();
  }

  /**
   * Return whether this Option does not contain data
   */
  public isNone() {
    return this.content.isNone();
  }

  /**
   * Unwraps the Option unconditionally.
   * Not recommended unless checked with {@link isSome} or {@link isNone}.
   * NOTE: this function should not be used directly
   */
  public unwrap() {
    return this.content.unwrap();
  }

  /**
   * Unwraps the Option, returning the provided default if it is `None`
   * @param default_value
   */
  public unwrapOr(default_value: T): T {
    if (this.isSome()) {
      return this.unwrap();
    } else {
      return default_value;
    }
  }

  /**
   * Unwraps the Option, returning the value calculated from the provided function
   * if it is `None`
   * @param closure
   */
  public unwrapOrElse(closure: (...args) => T): T {
    if (this.isSome()) {
      return this.unwrap();
    } else {
      return closure();
    }
  }
}
