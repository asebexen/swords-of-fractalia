
  const serverUrl = "https://api.forge-ml.com"
  

/** THIS IS A GENERATED FILE, EDITS WILL BE OVERWRITTEN */

type ClientOptions = {
  forgeKey: string;
  //   defaultModel: string;
};

type RequestOptions = {
  token?: string;
  cache?: "Bust" | "Evade"; // (@TODO: only if cache setting)
  model?: string;
};

// Options that will be set at generation time
type GeneratedOptions =
  | {
      username: string;
      path: string;
      contentType?: "text";
    }
  | {
      username: string;
      path: string;
      contentType: "image";
    };

type ImageQuery = { imageUrl: string; prompt: string };

type QueryType = string | ImageQuery;

export const createRequest = <T>(params: GeneratedOptions) => {
  return async (query: QueryType, opts: RequestOptions) => {
    const baseController = (() => {
      switch (params.contentType) {
        case "image":
          return "image";
        default:
          return "q";
      }
    })();
    try {
      const response = await fetch(
        `${serverUrl}/${baseController}/${params.username}/${params.path}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${opts.token}`,
            ...(opts.cache && {
              "Cache-Behavior": opts.cache,
              ...(opts.model && {
                Model: opts.model,
              }),
            }),
            ...(opts.model && {
              "X-Custom-Model": opts.model,
            }),
          },
          body: JSON.stringify({
            q: query,
          }),
        }
      );

      return response.json() as Promise<T>;
    } catch (error) {
      return { error: error } as T;
    }
  };
};

const Forge = (options: ClientOptions) => {
  const forgeKey = options.forgeKey;
  //   const defaultModel = options.defaultModel;

  const client = generatedClient(forgeKey);

  return client;
};

export default Forge;


  import destiny_schema from "./destiny.generated.ts"
import oath_schema from "./oath.generated.ts"
import name_schema from "./name.generated.ts"
import bond_schema from "./bond.generated.ts"

  const generatedClient = (forgeKey: string) => {
    return {
      
destiny: {
    query: (prompt: string, opts?: RequestOptions) => {
        return createRequest<Zod.infer<typeof destiny_schema>>({
          username: "ssebexen",
          path: "destiny",
        })(prompt, {
          token: opts?.token || forgeKey,
          cache: opts?.cache,
          model: opts?.model,
        });
      },
},

oath: {
    query: (prompt: string, opts?: RequestOptions) => {
        return createRequest<Zod.infer<typeof oath_schema>>({
          username: "ssebexen",
          path: "oath",
        })(prompt, {
          token: opts?.token || forgeKey,
          cache: opts?.cache,
          model: opts?.model,
        });
      },
},

name: {
    query: (prompt: string, opts?: RequestOptions) => {
        return createRequest<Zod.infer<typeof name_schema>>({
          username: "ssebexen",
          path: "name",
        })(prompt, {
          token: opts?.token || forgeKey,
          cache: opts?.cache,
          model: opts?.model,
        });
      },
},

bond: {
    query: (prompt: string, opts?: RequestOptions) => {
        return createRequest<Zod.infer<typeof bond_schema>>({
          username: "ssebexen",
          path: "bond",
        })(prompt, {
          token: opts?.token || forgeKey,
          cache: opts?.cache,
          model: opts?.model,
        });
      },
},
    };
  };
  