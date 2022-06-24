import { ServerClient, TemplatedMessage } from 'postmark';

const client = new ServerClient(process.env.POSTMARK_API);

import { EmailTemplates } from 'constants/emailTemplates';
import Sentry from 'utils/sentry';

export default async function sendTemplate(
  templateId: EmailTemplates,
  params: any,
  email: string,
  name: string = undefined,
) {
  try {
    const message = new TemplatedMessage('hello@truenorth.io', templateId, params, email);
    message.MessageStream = 'truenorth-transactions';
    await client.sendEmailWithTemplate(message);
  } catch (error) {
    console.error('Problem sending emails');
    Sentry.captureException(error);
  }
}
