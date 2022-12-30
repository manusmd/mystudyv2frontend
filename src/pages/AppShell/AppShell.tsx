import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import useUser from '../../hooks/useUser';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
      {user && (
        <>
          <Topbar user={user} />
          <Sidebar />
        </>
      )}
    </>
  );
}
