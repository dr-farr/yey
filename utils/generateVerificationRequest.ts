import { createHash, randomBytes } from 'crypto';
import prisma from 'utils/database/prisma';

const secret = process.env.SECRET;

const hashToken = (token: string) => createHash('sha256').update(`${token}${secret}`).digest('hex');

const maxAge = 24 * 60 * 60;

export const generateVerificationRequest = async (email) => {
  const token = randomBytes(32).toString('hex');

  const url = `${process.env.NEXTAUTH_URL}/api/auth/callback/magic-link?email=${encodeURIComponent(
    email,
  )}&token=${encodeURIComponent(token)}`;

  await prisma.verificationRequest.create({
    data: {
      identifier: email,
      token: hashToken(token),
      expires: new Date(Date.now() + maxAge * 1000),
    },
  });

  return url;
};
