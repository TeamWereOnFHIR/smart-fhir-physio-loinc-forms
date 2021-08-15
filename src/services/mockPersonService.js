import { RANDOM_USER_API_PATH } from "./constants";

/**
 * Random fake person generator service.
 */
class MockPersonService {
  /**
   * Fetches random users from randomuser.me/api
   * @returns Array of random user objects.
   */
  static fetchRandomUser = async () => {
    const data = await fetch(RANDOM_USER_API_PATH)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Parse results if needed.
        return data.results[0];
      })
      .catch((e) => console.error(e));

    return data;
  };
}

export default MockPersonService;
