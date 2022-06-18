// CreateElement

//innerHTML

//---------------------------------------------------------

const alertId = document.getElementById("alertId");

// CreateElement

function createAlertViaDom(Msg) {
  const div = document.createElement("div");

  div.className = "alert";

  const textNode = document.createTextNode(Msg);
  div.append(textNode);
  console.log(div);

  alertId.prepend(div);
}
createAlertViaDom("Successfully Updated!!");

//innerHTML
function createAlertViaTemp(msg) {
  const template = `
<div class="alert">
${msg}
</div>`;

  alertId.innerHTML += template;
  console.log(alertId);
}
createAlertViaTemp("Thankyou For Your Informaiton");
