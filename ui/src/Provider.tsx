import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { ColorMode, Config } from "./types";

export const defaultConfig: Config = {
  defaultShapes: {
    /**
     * Default shape for the BaseAccordion component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved'}
     */
    accordion: "rounded",
    /**
     * Default shape for the BaseAutocompleteItem component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    autocompleteItem: "rounded",
    /**
     * Default shape for the BaseAvatar component
     *
     * @type {'straight' | 'rounded' | 'curved' | 'full'}
     */
    avatar: "full",
    /**
     * Default shape for the BaseButton component
     *
     * @type {'straight' | 'rounded' | 'curved' | 'smooth' | 'full'}
     */
    button: "rounded",
    /**
     * Default shape for the BaseButtonAction component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    buttonAction: "rounded",
    /**
     * Default shape for the BaseButtonIcon component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    buttonIcon: "rounded",
    /**
     * Default shape for the BaseButtonClose component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    buttonClose: "full",
    /**
     * Default shape for the BaseCard component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved'}
     */
    card: "rounded",
    /**
     * Default shape for the BaseDropdown component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    dropdown: "rounded",
    /**
     * Default shape for the BaseIconBox component
     *
     * @type {'straight' | 'rounded' | 'curved' | 'full'}
     */
    iconBox: "rounded",
    /**
     * Default shape for all input components component
     * - BaseAutocomplete
     * - BaseCheckbox
     * - BaseInput
     * - BaseInputFile
     * - BaseInputListbox
     * - BaseInputSelect
     * - BaseInputTextarea
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    input: "rounded",
    /**
     * Default shape for the BaseMessage component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    message: "curved",
    /**
     * Default shape for the BasePagination component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    pagination: "rounded",
    /**
     * Default shape for the BaseProgress component
     *
     * @type {'straight' | 'rounded' | 'curved' | 'full'}
     */
    progress: "full",
    /**
     * Default shape for the BaseProse component
     *
     * @type {'straight' | 'rounded' | 'curved'}
     */
    prose: "rounded",
    /**
     * Default shape for the BaseTabSlider component
     *
     * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
     */
    tabSlider: "rounded",
    /**
     * Default shape for the BaseTag component
     *
     * @type {'straight' | 'rounded' | 'curved' | 'full'}
     */
    tag: "rounded",
  },
};

const ConfigContext = createContext<Config>(defaultConfig);

export const useConfig = () => {
  const config = useContext(ConfigContext);

  return config;
};

export const useTheme = () => {
  const [colorMode, setColorMode] = useState<{
    preference: ColorMode;
    value: Omit<ColorMode, "system">;
  }>({ preference: "system", value: "dark" });

  return { colorMode, setColorMode };
};

type ThemeContextType = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error(
      "Ensure useThemeContext is used within <ShurikenUIProvider>",
    );
  }

  return ctx;
};

export const ShurikenUIProvider: FC<{
  children: ReactNode;
  options?: Partial<Config>;
}> = ({ children, options = {} }) => {
  const config = useMemo<Config>(
    () => ({ ...defaultConfig, ...options }),
    [options],
  );

  return (
    <ConfigContext.Provider value={config}>
      <ThemeContext.Provider value={useTheme()}>
        {children}
      </ThemeContext.Provider>
    </ConfigContext.Provider>
  );
};
