
import { useState } from "react";

const useAddDependency = (initialDependencies: Record<string, string>) => {
  const [mergedDependencies, setMergedDependencies] = useState<Record<string, string>>(initialDependencies);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const addDependency = async (dependency: string) => {
    if (!dependency) return;

    setLoading(true);
    setError("");

    try {
      // Validate the npm package
      const response = await fetch(`https://registry.npmjs.org/${dependency}`);
      if (!response.ok) {
        throw new Error("Invalid package name");
      }

      const packageInfo = await response.json();
      const latestVersion = packageInfo['dist-tags'].latest;

      // Add the new dependency with the latest version
      const newDependencies = { [dependency]: latestVersion };
      setMergedDependencies((prev) => ({ ...prev, ...newDependencies }));

      alert(`Added dependency: ${dependency}@${latestVersion}`);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { mergedDependencies, addDependency, loading, error };
};

export default useAddDependency;
