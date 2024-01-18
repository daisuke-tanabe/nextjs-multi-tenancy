export default function Page() {
  return (
    <div>
      <h1>signin</h1>
      <form>
        <div>
          username: <input type="text" name="username" />
        </div>
        <div>
          email: <input type="text" name="email" />
        </div>
        <div>
          password: <input type="password" name="password" />
        </div>
        <div>
          <button type="submit" value="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}