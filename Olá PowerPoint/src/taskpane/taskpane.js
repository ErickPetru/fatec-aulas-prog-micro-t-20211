/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global console, document, Office */

Office.onReady(info => {
  if (info.host === Office.HostType.PowerPoint) {
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  /**
   * Insert your PowerPoint code here
   */
  Office.context.document.setSelectedDataAsync(
    "Olá PowerPoint!",
    {
      coercionType: Office.CoercionType.Text
    },
    result => {
      if (result.status === Office.AsyncResultStatus.Failed) {
        console.error(result.error.message);
      }
    }
  );
}
