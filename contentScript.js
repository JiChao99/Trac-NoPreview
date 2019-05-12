var elements = document.getElementsByClassName("trac-disable-on-submit");
if (elements.length > 0) {
    elements[0].disabled = false;
    elements[0].value += "(Trac-NoPreview)";
    console.log("Trac-NoPreview Success");
}