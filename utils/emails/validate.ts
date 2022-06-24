export interface Validation {
  valid: boolean;
  reason?: string;
}

/**
 * See the MX Record Validator class for details
 * {@link MxRecordValidator}
 */
export class EmailSyntaxValidator {
  private static regex: RegExp =
    /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-zA-Z0-9]{2,})$/;

  /**
   * Validate an email address by syntax according to RFC5322 and RFC5321.
   * Runs synchronously so this can be used on the fly to validate.
   *
   * @static
   * @param {string} email - the email address to validate against
   * @returns {Validation} whether the syntax of this email is valid
   */
  public static validateSyntax(email: string): Validation {
    const normalised = email.toLowerCase();

    // fail validation if the email is blank
    if (!normalised) {
      return {
        valid: false,
        reason: "Empty email address",
      };
    }

    // fail validation if the structural regex fails
    if (!EmailSyntaxValidator.regex.test(normalised)) {
      return {
        valid: false,
        reason: "Invalid email address structure",
      };
    }

    // fail validation if the email is longer than 256 characters (RFC5322 requirement)
    if (normalised.length > 256) {
      return {
        valid: false,
        reason: "Invalid email address length",
      };
    }

    // fail validation if the domain name exceeds the RFC limit
    const [accountName, domainName] = normalised.split("@");
    if (accountName.length > 64) {
      return {
        valid: false,
        reason: "Invalid domain name length",
      };
    }

    const locals = domainName.split(".");
    if (locals.some((part) => part.length > 63)) {
      return {
        valid: false,
        reason: "Invalid domain part length",
      };
    }

    return {
      valid: true,
    };
  }
}
