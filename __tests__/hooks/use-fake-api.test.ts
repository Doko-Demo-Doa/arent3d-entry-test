import { test, vi, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useFakeApi from "../../shared/hooks/use-fake-api";

vi.mock("../../shared/hooks/use-fake-api", () => {
  const mockData = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return {
    default: vi
      .fn()
      .mockReturnValue({ data: mockData, isLoading: false, error: {} }),
  };
});

describe("useFakeApi hook", async () => {
  test("fetch the data correctly", async () => {
    const { result } = renderHook(() => useFakeApi());

    expect(result.current?.data?.title).toBe("delectus aut autem");
  });
});
