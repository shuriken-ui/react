"use client";
import {
  BaseSwitchBall,
  BaseSwitchThin,
  BaseFocusLoop,
} from "@shuriken-ui/react";
import { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";

const Switch = () => {
  const [thinValues, setThinValues] = useState({
    primary: true,
    info: true,
    success: true,
    warning: true,
    danger: true,
  });

  const [ballValues, setBallValues] = useState({
    primary: true,
    info: true,
    success: true,
    warning: true,
    danger: true,
  });

  return (
    <Fragment>
      <NuiPreview title="Thin: default" description="Switch thin component">
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseSwitchThin
            onChange={(value) =>
              setThinValues((oldValue) => ({ ...oldValue, primary: value }))
            }
            checked={thinValues.primary}
            label="Primary"
            color="primary"
          />
          <BaseSwitchThin
            onChange={(value) =>
              setThinValues((oldValue) => ({ ...oldValue, info: value }))
            }
            checked={thinValues.info}
            label="Info"
            color="info"
          />
          <BaseSwitchThin
            onChange={(value) =>
              setThinValues((oldValue) => ({ ...oldValue, success: value }))
            }
            checked={thinValues.success}
            label="Success"
            color="success"
          />
          <BaseSwitchThin
            onChange={(value) =>
              setThinValues((oldValue) => ({ ...oldValue, warning: value }))
            }
            checked={thinValues.warning}
            label="Warning"
            color="warning"
          />
          <BaseSwitchThin
            onChange={(value) =>
              setThinValues((oldValue) => ({ ...oldValue, danger: value }))
            }
            checked={thinValues.danger}
            label="Danger"
            color="danger"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Thin: sublabel" description="Switch thin sublabel">
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchThin
            label="Primary"
            sublabel="This is a primary switch"
            color="primary"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Ball: default" description="Switch thin component">
        <BaseFocusLoop className="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseSwitchBall
            onChange={(value) =>
              setBallValues((oldValue) => ({ ...oldValue, primary: value }))
            }
            checked={ballValues.primary}
            label="Primary"
            color="primary"
          />
          <BaseSwitchBall
            onChange={(value) =>
              setBallValues((oldValue) => ({ ...oldValue, info: value }))
            }
            checked={ballValues.info}
            label="Info"
            color="info"
          />
          <BaseSwitchBall
            onChange={(value) =>
              setBallValues((oldValue) => ({ ...oldValue, success: value }))
            }
            checked={ballValues.success}
            label="Success"
            color="success"
          />
          <BaseSwitchBall
            onChange={(value) =>
              setBallValues((oldValue) => ({ ...oldValue, warning: value }))
            }
            checked={ballValues.warning}
            label="Warning"
            color="warning"
          />
          <BaseSwitchBall
            onChange={(value) =>
              setBallValues((oldValue) => ({ ...oldValue, danger: value }))
            }
            checked={ballValues.danger}
            label="Danger"
            color="danger"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Ball: sublabel" description="Switch thin sublabel">
        <div className="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchBall
            label="Primary"
            sublabel="This is a primary switch"
            color="primary"
          />
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default Switch;
