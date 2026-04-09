# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.


./deployFiles.sh -k ~/downloads/cs260_key.pem -h xinlin260.click -s startup


## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML
deploy the simon into my page

https://codepen.io/xinlinwang53-crypto/pen/emzydRq


## CSS


.test{
    display:flex;
    
    justify-content: space-between;
    align-items: flex-end ;
    height: 500px;

}

## React Part 1: Routing

This one is easy. Only problem is some minor problem when putting app.jsx. Lots of stuff to be caution for. Ex, Add body in div.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```


##startup service

这边大概就是连接后端，api

优化建议：
选择图片
可以tyoe状态 
可以选择是否进入space
space可以优化
 
只有朋友可以看见彼此.  ok
主用户应该是第一个.   ok
那个localstorage很有点问题，完全不建议用local、
手机版点出来看着排版很垃圾
offline 跟online这个要实现


bug: 1.手机打开有问题 2.login create颜色问题 3.没登陆不应该看得见其他的东西 4.照片为啥一开始会闪？ 5. 考虑更新照片upload


./deployService.sh -k ~/downloads/cs260_key.pem -h xinlin260.click -s startup



simon的websocket同时会传数据，但不是necessary。如果实时的东西很小/就是实时聊天这种，可以用websocket传数据反而更合适

但一般可以就做到一个通知功能，通知重新fetch就好了
