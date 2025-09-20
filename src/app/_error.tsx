'use client';

export default function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>Sorry, something went wrong.</p>
    </div>
  );
}
