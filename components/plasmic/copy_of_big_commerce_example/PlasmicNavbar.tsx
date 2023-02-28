// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vn4GCfRoYe35APzZGsNDnF
// Component: _gxfyOiD26jFy
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { CategoryLink } from "@plasmicpkgs/commerce"; // plasmic-import: IgUPztABXZHl2T/codeComponent
import NavItem from "../../NavItem"; // plasmic-import: HEtuu_qCUDpai/component
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: RDlk_ahCK2O87m/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: 84Rc4ZXyToFdPo/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: GCfRhgbsLCs4E/component
import Cart from "../../Cart"; // plasmic-import: WjKEpmN7XX2qVX/component

import { useScreenVariants as useScreenVariants_7B4JcqpiMNuGn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -7b4JcqpiMNuGn/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_copy_of_big_commerce_example.module.css"; // plasmic-import: vn4GCfRoYe35APzZGsNDnF/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: _gxfyOiD26jFy/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: 1vf-VilJfxtMgF/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: MCFtU6nrBV2xxK/icon
import WishlistIcon from "./icons/PlasmicIcon__Wishlist"; // plasmic-import: LA7TScipP25zOl/icon

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {
  query?: string;
};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>("query");

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  categoryCollection?: p.Flex<typeof CategoryCollection>;
  categoryField?: p.Flex<typeof CategoryField>;
  textInput?: p.Flex<typeof TextInput>;
  cart?: p.Flex<typeof Cart>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultNavbarProps {
  query?: string;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_7B4JcqpiMNuGn()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__z5Tn9)}
        >
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <LogoIcon
              className={classNames(projectcss.all, sty.svg__ggEbK)}
              role={"img"}
            />
          </p.PlasmicLink>

          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <CategoryLink
              className={classNames("__wab_instance", sty.categoryLink__lBe7)}
              linkDest={"/search" as const}
            >
              <NavItem
                className={classNames("__wab_instance", sty.navItem__qe21M)}
              >
                {"All"}
              </NavItem>
            </CategoryLink>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <CategoryCollection
              data-plasmic-name={"categoryCollection"}
              data-plasmic-override={overrides.categoryCollection}
              className={classNames("__wab_instance", sty.categoryCollection)}
              emptyMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zNMj
                      )}
                    >
                      {"No collection found!"}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              loadingMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qkYjt
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              noLayout={true}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <NavItem
                    className={classNames(
                      "__wab_instance",
                      sty.navItem___7LEpw
                    )}
                  >
                    <CategoryLink
                      className={classNames(
                        "__wab_instance",
                        sty.categoryLink__nm9M6
                      )}
                      linkDest={"/search" as const}
                    >
                      <CategoryField
                        data-plasmic-name={"categoryField"}
                        data-plasmic-override={overrides.categoryField}
                        className={classNames(
                          "__wab_instance",
                          sty.categoryField
                        )}
                        field={"name" as const}
                      />
                    </CategoryLink>
                  </NavItem>
                )}
              </ph.DataCtxReader>
            </CategoryCollection>
          ) : null}
        </p.Stack>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <TextInput
          data-plasmic-name={"textInput"}
          data-plasmic-override={overrides.textInput}
          className={classNames("__wab_instance", sty.textInput)}
          color={"dark" as const}
          defaultValue={args.query}
          endIcon={
            <SearchsvgIcon
              className={classNames(projectcss.all, sty.svg__ikgQy)}
              role={"img"}
            />
          }
          showEndIcon={true}
        />
      ) : null}
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ceQ1P)}
        >
          <Cart
            data-plasmic-name={"cart"}
            data-plasmic-override={overrides.cart}
            className={classNames("__wab_instance", sty.cart)}
          />

          <WishlistIcon
            className={classNames(projectcss.all, sty.svg__su02Z)}
            role={"img"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__w7JIn)} />
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "categoryCollection",
    "categoryField",
    "textInput",
    "textbox",
    "cart"
  ],
  link: ["link"],
  categoryCollection: ["categoryCollection", "categoryField"],
  categoryField: ["categoryField"],
  textInput: ["textInput", "textbox"],
  cart: ["cart"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  categoryCollection: typeof CategoryCollection;
  categoryField: typeof CategoryField;
  textInput: typeof TextInput;
  cart: typeof Cart;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    categoryCollection: makeNodeComponent("categoryCollection"),
    categoryField: makeNodeComponent("categoryField"),
    textInput: makeNodeComponent("textInput"),
    cart: makeNodeComponent("cart"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */