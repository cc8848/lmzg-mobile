var ajaxGet = function (url, fn) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data) {
            fn.call(window, data);
        }
    })
};

function judgeWeixin(ele, fn) {
    var $shadow = $('#shadow');
    $shadow.off('click');
    $shadow.click(function () {
        $(this).css('display', 'none');
    });

    $(ele).click(function () {
        var $this = $(this),
            useragent = window.navigator.userAgent.toLowerCase();
        if (useragent.indexOf('micromessenger') > 0) {
            $shadow.show();
        } else {
            fn.call(window, $this);
        }
        return false;
    });
}

function oneButton(ele) {
    judgeWeixin(ele, function ($this) {
        var u = window.navigator.userAgent.toLowerCase();
        if (u.indexOf('iphone') > 0 || u.indexOf("iPad") > 0) {
            window.location.href = $this.attr('data-apple');
        } else if (u.indexOf('android') > 0) {
            window.location.href = $this.attr('data-android');
        }
    });
}

var mountDidFn = function () {
    if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        $('div.pc-tips').show();
    }

    oneButton('#gameDownload');
    oneButton('#loadMore');

    judgeWeixin('#appleDownload', function ($this) {
        window.location.href = $this.attr('href');
    });
    judgeWeixin('#androidDownload', function ($this) {
        window.location.href = $this.attr('href');
    });

};

var httpToHttps = function () {
    var ishttps = 'https:' == document.location.protocol ? true : false,
        url = window.location.href.split(':');
    if (!ishttps) {
        if (url < 3) {
            window.location.href = 'https:' + url[1];
        } else {
            var newUrl = 'https:';
            for (var i = 1; i < url.length; i++) {
                newUrl += url[i];
            }
            window.location.href = newUrl;
        }
    }
};

var proxyUrl = 'https://lmzg.8864.com';

export {ajaxGet, mountDidFn, proxyUrl, httpToHttps}