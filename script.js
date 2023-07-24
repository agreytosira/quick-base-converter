const inputNumber = document.querySelectorAll(".input-number");
inputNumber.forEach((base, index) => {
    base.addEventListener("change", () => {
        if (base.value !== "" || null) {
            if (inputNumber[index].name == "decimal") {
                inputNumber[1].value = parseInt(inputNumber[0].value).toString(
                    2
                );
                inputNumber[2].value = parseInt(inputNumber[0].value).toString(
                    8
                );
                inputNumber[3].value = parseInt(inputNumber[0].value)
                    .toString(16)
                    .toUpperCase();
            } else if (inputNumber[index].name == "binary") {
                inputNumber[0].value = parseInt(inputNumber[1].value, 2);
                inputNumber[2].value = parseInt(
                    inputNumber[1].value,
                    2
                ).toString(8);
                inputNumber[3].value = parseInt(inputNumber[1].value, 2)
                    .toString(16)
                    .toUpperCase();
            } else if (inputNumber[index].name == "octadecimal") {
                inputNumber[0].value = parseInt(inputNumber[2].value, 8);
                inputNumber[1].value = parseInt(
                    inputNumber[2].value,
                    8
                ).toString(2);
                inputNumber[3].value = parseInt(inputNumber[2].value, 8)
                    .toString(16)
                    .toUpperCase();
            } else {
                inputNumber[0].value = parseInt(inputNumber[3].value, 16);
                inputNumber[1].value = parseInt(
                    inputNumber[3].value,
                    16
                ).toString(2);
                inputNumber[2].value = parseInt(
                    inputNumber[3].value,
                    16
                ).toString(8);
            }
        } else if (base.value == "" || null) {
            alert("Tidak boleh kosong!");
        }
    });
});
