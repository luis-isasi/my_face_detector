import { useContextAuth } from '@Context/contextAuth';
import LinkPrimary from '@Components/Links/LinkPrimary';

const App = () => {
  const { user, signoutUser } = useContextAuth();

  const handleOnClick = () => {
    signoutUser();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="text-white box-border p-5 mx-auto container md:max-w-xl xl:max-w-5xl h-auto flex flex-col items-center">
        <span className="text-3xl md:text-4xl xl:text-5xl text-center my-5 font-extrabold">
          - My Face Detector -
        </span>
        <p className="text-center text-lg my-8">
          My Face detector es una aplicaciรณn para registrarse e iniciar sesiรณn
          con reconocimiento facial, usando la camara de tu dispositivo, usando
          la{' '}
          <a
            target="_blank"
            href="https://docs.microsoft.com/es-es/azure/cognitive-services/face/overview"
            rel="noreferrer"
            className="font-extrabold text-green-500"
          >
            Api face de Microsoft Azure
          </a>
          ๐๐๐
        </p>
        <p className="text-lg">๐๐ Puedes ver el repositorio aquรญ ๐๐</p>
        <p className="text-xl my-8">
          ๐
          <a
            target="_blank"
            href="https://github.com/luis-isasi/login_face"
            rel="noreferrer"
            className="py-2 px-4 rounded-md outline-none text-purple-400"
          >
            Repositorio
          </a>
          ๐
        </p>
        <div className="w-full h-40 md:h-auto md:my-3 flex flex-col md:flex-row justify-around items-center">
          <LinkPrimary href="/login">Iniciar Sesiรณn ๐</LinkPrimary>
          <LinkPrimary href="/register">Registrarse ๐</LinkPrimary>
        </div>
      </div>
    </div>
  );
};

export default App;
