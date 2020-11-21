import _ from 'lodash';
import Cryptr from 'cryptr';
import moment from "moment";
import momentTimezone from "moment-timezone";
import html2canvas from "html2canvas";

const cryptr = new Cryptr('Beyond#123!!');

export const arrayToObject = (data: any) => {
    let currentThis: any = this;
    let newObj: any = {};
    if (Array.isArray(data)) {
        data.forEach(function (element, index) {
            if (Array.isArray(element) || typeof element === 'object')
                newObj[index] = currentThis.arrayToObject(element);
            else
                newObj[index] = element;
        });
    } else if (typeof data === 'object' && data !== null) {
        Object.keys(data).forEach((key) => {
            newObj[key] = currentThis.arrayToObject(data[key]);
        });
    } else {
        return data;
    }
    return newObj;
};

export const partialText = (txt: string, maxLength: number = 20): string => {
    if (typeof txt !== 'string')
        return txt;
    if (txt.length > maxLength)
        return txt.substr(0, maxLength) + '... ';
    return txt;
};

export const subStringBack = (txt: string, separator: string): string | undefined => {
    if (!txt || !separator)
        return '';
    return txt.split(separator).pop();
};

export const randomStr = (length: number = 20): string => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const timestampToDate = (timestamps = moment().unix(), format = 'DD-MM-YYYY hh:mm a') => {
    return momentTimezone(moment.unix(timestamps)).tz('Africa/Cairo').format(format);
};

export const dateComparedWithToday = (timestamps = moment().unix(), format = 'DD-MM-YYYY hh:mm a') => {
    let today = moment();
    let yesterday = today.clone().subtract(1, 'days').startOf('day');
    let date = momentTimezone(moment.unix(timestamps)).tz('Africa/Cairo');
    if (date.isSame(today, 'd'))
        return `Today at ${date.format('hh:mm a')}`;
    else if (date.isSame(yesterday, 'd'))
        return `Yesterday at ${date.format('hh:mm a')}`;
    else if (date.isSame(today, 'week'))
        return `${date.format('dddd')} ${date.format('hh:mm a')}`;
    return date.format(format);
};


export const encryptData = (str: string) => {
    return cryptr.encrypt(str);
};

export const decryptData = (encryptedStr: string) => {
    return cryptr.decrypt(encryptedStr);
};


export const download = (path: string, fileName: string) => {
    fetch(path)
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
            });
        });
};

export const sleep = async (ms: number) => {
    return await new Promise(resolve => setTimeout(resolve, ms));
};

export const isHtml = (str: string) => {
    return /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(str);
};

export const getFiles = async (files: any): Promise<{ name: string, type: string, size: string, base64: string, file: any }[]> => {
    let allFiles: any = [];
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        allFiles.push(readFileAsync(file));
    }
    return await Promise.all(allFiles);
};

function readFileAsync(file: any) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            let fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1000) + ' kB',
                base64: reader.result,
                file: file,
            };
            resolve(fileInfo as { name: string, type: string, size: string, base64: string, file: any });
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
    })
}

export const isScrollBottom = (element: HTMLElement, elementHeight: number, gapFromBottom: number = 0): boolean => {
    let position = element.scrollTop;
    let scrollerBarHeight = element.clientHeight * (element.clientHeight / element.offsetHeight);
    let percentageOfTotalHeight = (gapFromBottom * elementHeight) / 100;
    return !(position < elementHeight - (scrollerBarHeight + percentageOfTotalHeight));
};

export const isScrollTop = (element: HTMLElement, elementHeight: number, gapFromTop: number = 0): boolean => {
    let position = element.scrollTop;
    let percentageOfTotalHeight = (gapFromTop * elementHeight) / 100;
    return (position > 0 && position <= percentageOfTotalHeight);
};

export const getFileExtension = (str: string, delimiter: string): string => {
    try {
        // is base64
        atob(subStringBack(str, ',') as string)
        return str.split(',')[0].split(';')[0].split('/').pop() as string;
    } catch (e) {
        return subStringBack(str, delimiter) as string;
    }
}

export const updateTableStyle = (domBody: any) => {
    for (let i = 0; i < domBody.getElementsByTagName('colgroup').length; i++) {
        for (let k = 0; k < domBody.getElementsByTagName('tr').length; k++) {
            let currentColWidth = domBody.getElementsByTagName('colgroup')[i].getAttribute('width');
            if (currentColWidth !== null) {
                domBody.getElementsByTagName('tr')[k].getElementsByTagName('td')[i].style.minWidth = (parseInt(currentColWidth) + 100).toString() + 'px';
            }
        }
    }
};

export const str2DOMElement = async (html: any, cb: Function) => {
    let frameTemp: any = document.createElement('iframe');
    let frame: any = document.createElement('iframe');
    // first frame
    frame.style.position = 'absolute';
    frame.style.left = '-100rem';
    frame.style.zIndex = 10;
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    //update table style if it's html not html5
    updateTableStyle(frame.contentDocument.body);
    //temp frame
    frameTemp.style.position = 'absolute';
    frameTemp.style.left = '-100rem';
    frameTemp.style.zIndex = 20;
    frameTemp.style.height = (frame.contentWindow.document.body.scrollHeight).toString() + 'px';
    frameTemp.style.width = (frame.contentWindow.document.body.scrollWidth).toString() + 'px';
    document.body.appendChild(frameTemp);
    frameTemp.contentDocument.open();
    frameTemp.contentDocument.write(frame.contentDocument.body.outerHTML);
    frameTemp.contentDocument.close();
    const results = await cb(frameTemp.contentDocument);
    document.body.removeChild(frame);
    document.body.removeChild(frameTemp);
    return results;
};

export const generateCanvas = async (domEl: any) => {
    return await html2canvas(domEl.querySelector('html'), {});
};

export const dataURLtoFile = (dataUrl: string, filename: string) => {
    let arr: any = dataUrl.split(',') as any,
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

export const isUnicode = (str: any) => {
    let letters = [];
    for (let i = 0; i <= str.length; i++) {
        letters[i] = str.substring((i - 1), i);
        if (letters[i].charCodeAt() > 255) {
            return true;
        }
    }
    return false;
}
