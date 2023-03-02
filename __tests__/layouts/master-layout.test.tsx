import { expect, test, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../utils/test-utils";

// Must be relative import
import MasterLayout from "../../layouts/master-layout";

beforeAll(() => {
  vi.mock("next/router", () => ({
    useRouter() {
      return {
        route: "/",
        pathname: "",
        query: "",
        asPath: "",
        push: vi.fn(),
        events: {
          on: vi.fn(),
          off: vi.fn(),
        },
        beforePopState: vi.fn(() => null),
        prefetch: vi.fn(() => null),
      };
    },
  }));
});

describe("Master Layout", () => {
  test("renders the layout with proper header", () => {
    render(
      <MasterLayout>
        (<div>Testing</div>)
      </MasterLayout>
    );

    const target = screen.findByText("自分の記録");
    expect(target).toBeDefined();
  });
});
