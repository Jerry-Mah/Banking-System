import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = {firstName: 'Jeremy'}
  return (
    <main className=" flex w-full h-screen font-inter">
      <Sidebar user = {loggedInUser}/>
      {children}
    </main>
  );
}
