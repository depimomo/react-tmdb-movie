import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const PrivateComponent = ({ children, loginOnly = true }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // kita pakai useEffect untuk menjalankannya pertama kali saat render
  useEffect(() => {
    // kalau masih loading, jangan proses dulu
    if (loading) return;

    // kalau user belum login dan mengakses halaman khusus login, maka arahkan ke login
    if (!user && loginOnly) {
      navigate('/login')
    }

    // kalau user sudah login dan mengakses halaman khusus non login, maka arahkan ke home
    if (user && !loginOnly) {
      navigate('/')
    }

    // jalankan ulang kalau ada perubahan di user/loading
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading])

  return loading ? <>loading...</> : children;
};

export default PrivateComponent;
