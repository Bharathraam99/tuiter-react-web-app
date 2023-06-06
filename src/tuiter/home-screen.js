import TuitsList from "./tuits/tuit-list";
import WhatsHappening from "./whats-happening";
function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
}
export default HomeScreen;
