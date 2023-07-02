import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // use viewport height to fill the entire screen
      width: '100vw' // use viewport width to fill the entire screen
    }}>
      <SignUp />
    </div>
  );
}
