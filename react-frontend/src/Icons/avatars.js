import React from "react"

const Avatars = (props) => {
    const {onClick,styles} = props
    
    // const {username='',cacheAvatar={}} = props;
    // const randomAva = Math.floor(Math.random() * (6 - 1) + 1);
    // let avatar;
    
    
    
    // const avatarsIcons = [<svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#ffc200"></circle><path fill="#677079" fillRule="evenodd" d="M52.587 52.908a30.895 30.895 0 0 1-43.667-.291 9.206 9.206 0 0 1 4.037-4.832 19.799 19.799 0 0 1 4.075-2.322c-2.198-7.553 3.777-11.266 6.063-12.335 0 3.487 3.265 1.173 7.317 1.217 3.336.037 9.933 3.395 9.933-1.035 3.67 1.086 7.67 8.08 4.917 12.377a17.604 17.604 0 0 1 3.181 2.002 10.192 10.192 0 0 1 4.144 5.22z"></path><path fill="#f9dca4" fillRule="evenodd" d="m24.032 38.68 14.92.09v3.437l-.007.053a2.784 2.784 0 0 1-.07.462l-.05.341-.03.071c-.966 5.074-5.193 7.035-7.803 8.401-2.75-1.498-6.638-4.197-6.947-8.972l-.013-.059v-.2a8.897 8.897 0 0 1-.004-.207c0 .036.003.07.004.106z"></path><path fillRule="evenodd" d="M38.953 38.617v4.005a7.167 7.167 0 0 1-.095 1.108 6.01 6.01 0 0 1-.38 1.321c-5.184 3.915-13.444.704-14.763-5.983z" opacity=".11"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.104 25.235c-4.94 1.27-.74 7.29 2.367 7.264a19.805 19.805 0 0 1-2.367-7.264zM43.837 25.235c4.94 1.27.74 7.29-2.368 7.263a19.8 19.8 0 0 0 2.368-7.263z"></path><path fill="#ffe8be" fillRule="evenodd" d="M30.733 11.361c20.523 0 12.525 32.446 0 32.446-11.83 0-20.523-32.446 0-32.446z"></path><path fill="#8a5c42" fillRule="evenodd" d="M21.047 22.105a1.738 1.738 0 0 1-.414 2.676c-1.45 1.193-1.503 5.353-1.503 5.353-.56-.556-.547-3.534-1.761-5.255s-2.032-13.763 4.757-18.142a4.266 4.266 0 0 0-.933 3.6s4.716-6.763 12.54-6.568a5.029 5.029 0 0 0-2.487 3.26s6.84-2.822 12.54.535a13.576 13.576 0 0 0-4.145 1.947c2.768.076 5.443.59 7.46 2.384a3.412 3.412 0 0 0-2.176 4.38c.856 3.503.936 6.762.107 8.514-.829 1.752-1.22.621-1.739 4.295a1.609 1.609 0 0 1-.77 1.214c-.02.266.382-3.756-.655-4.827-1.036-1.07-.385-2.385.029-3.163 2.89-5.427-5.765-7.886-10.496-7.88-4.103.005-14 1.87-10.354 7.677z"></path><path fill="#434955" fillRule="evenodd" d="M19.79 49.162c.03.038 10.418 13.483 22.63-.2-1.475 4.052-7.837 7.27-11.476 7.26-6.95-.02-10.796-5.6-11.154-7.06z"></path><path fill="#e6e6e6" fillRule="evenodd" d="M36.336 61.323c-.41.072-.822.135-1.237.192v-8.937a.576.576 0 0 1 .618-.516.576.576 0 0 1 .619.516v8.745zm-9.82.166q-.622-.089-1.237-.2v-8.711a.576.576 0 0 1 .618-.516.576.576 0 0 1 .62.516z"></path></g></g></svg>,
    // <svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#485a69"></circle><path fill="#f9dca4" fillRule="evenodd" d="M23.242 38.592l15.92.209v12.918l-15.907-.121-.013-13.006z"></path><path fill="#d5e1ed" fillRule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.225 31.225 0 0 1-3.837-.237A30.699 30.699 0 0 1 15.9 57.919a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.84 6.152 7.97 6.244 7.57.113 7.94-1.606 7.94-6.28l12.79 6.281z"></path><path fillRule="evenodd" d="M39.165 38.778v3.404c-2.75 4.914-14 4.998-15.923-3.59z" opacity=".11"></path><path fill="#ffe8be" fillRule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 001.471-7.658z"></path><path fill="#ecbe6a" fillRule="evenodd" d="M43.409 29.584s1.066-8.716-2.015-11.752c-1.34 3.528-7.502 4.733-7.502 4.733a16.62 16.62 0 0 0 3.215-2.947c-1.652.715-6.876 2.858-11.61 1.161a23.715 23.715 0 0 0 3.617-2.679s-4.287 2.322-8.44 1.742c-2.991 2.232-1.66 9.162-1.66 9.162C15 18.417 18.697 6.296 31.39 6.226c12.358-.069 16.17 11.847 12.018 23.358z"></path><path fill="#fff" fillRule="evenodd" d="M23.255 42.179a17.39 17.39 0 0 0 7.958 6.446l-5.182 5.349L19.44 43.87z"></path><path fill="#fff" fillRule="evenodd" d="M39.16 42.179a17.391 17.391 0 0 1-7.958 6.446l5.181 5.349 6.592-10.103z"></path><path fill="#3dbc93" fillRule="evenodd" d="M33.366 61.7q-1.239.097-2.504.098-.954 0-1.895-.056l1.031-8.757h2.41z"></path><path fill="#3dbc93" fillRule="evenodd" d="M28.472 51.456l2.737-2.817 2.736 2.817-2.736 2.817-2.737-2.817z"></path></g></g></svg>,
    // <svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><path fill="#ffe8be" fillRule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><circle cx="30.9" cy="30.9" r="30.9" fill="#58b0e0"></circle><path fill="#60350a" fillRule="evenodd" d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"></path><path fill="#d5e1ed" fillRule="evenodd" d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"></path><path fill="#f9dca4" fillRule="evenodd" d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"></path><path fillRule="evenodd" d="M37.677 38.778v3.58a9.168 9.168 0 0 1-.04 1.226 6.898 6.898 0 0 1-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z" opacity=".11"></path><path fill="#434955" fillRule="evenodd" d="M52.797 52.701a30.896 30.896 0 0 1-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0 0 43.2 45.483l8.144 3.853z"></path><path fill="#f9dca4" fillRule="evenodd" d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"></path><path fill="#ffe8be" fillRule="evenodd" d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"></path><path fill="#464449" fillRule="evenodd" d="M33.399 24.983a7.536 7.536 0 0 1 5.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 0 0-.785 1.022 6.566 6.566 0 0 1-1.052 2.922 5.175 5.175 0 0 1-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 0 1-3.65-1.554 8.33 8.33 0 0 1-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 0 1-1.52 2.64 4.347 4.347 0 0 1-3.651 1.555 5.242 5.242 0 0 1-.516-.058 5.176 5.176 0 0 1-3.464-2.312 6.568 6.568 0 0 1-1.052-2.921 2.75 2.75 0 0 0-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 0 1 5.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 0 0 3.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 0 0-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 0 0 .712 1.532 4.204 4.204 0 0 0 3.326 1.995 3.536 3.536 0 0 0 2.966-1.272 7.597 7.597 0 0 0 1.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 0 0-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 0 0 1.316 2.26 3.536 3.536 0 0 0 2.967 1.272 4.228 4.228 0 0 0 .43-.048 4.34 4.34 0 0 0 2.896-1.947 5.593 5.593 0 0 0 .684-1.44c.702-2.25.076-2.751-1.828-3.451z"></path><path fill="#8a5c42" fillRule="evenodd" d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 0 0 .956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"></path><path fill="#fff" fillRule="evenodd" d="M24.765 42.431a14.125 14.125 0 0 0 6.463 5.236l-4.208 6.144-5.917-9.78z"></path><path fill="#fff" fillRule="evenodd" d="M37.682 42.431a14.126 14.126 0 0 1-6.463 5.236l4.209 6.144 5.953-9.668z"></path><circle cx="31.223" cy="52.562" r=".839" fill="#434955"></circle><circle cx="31.223" cy="56.291" r=".839" fill="#434955"></circle><path fill="#464449" fillRule="evenodd" d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 0 0-.785 1.022 6.618 6.618 0 0 1-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 0 1-.384-1.615 2.748 2.748 0 0 0-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"></path></g></g></svg>,
    // <svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 66.358" id="avatar"><defs><clipPath id="a"><path fill="none" d="M53.456 52.022A30.766 30.766 0 0 1 30.9 61.829a31.163 31.163 0 0 1-3.833-.237 34.01 34.01 0 0 1-11.15-3.644 31.007 31.007 0 0 1-7.849-6.225l1.282-3.1 13.91-6.212c.625 3.723 7.806 8.175 7.806 8.175s7.213-3.412 8.087-8.211l12.777 6.281z" clipRule="evenodd"></path></clipPath><clipPath id="b"><path fill="none" d="M14.112 46.496l6.814-3.042 10.209 13.978 10.328-13.938 5.949 2.831v20.033h-33.3V46.496z" clipRule="evenodd"></path></clipPath></defs><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#3dbc93"></circle><path fill="#f9dca4" fillRule="evenodd" d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"></path><path fillRule="evenodd" d="M39.165 38.778v3.58a7.783 7.783 0 0 1-.098 1.18 6.527 6.527 0 0 1-.395 1.405c-5.374 4.164-13.939.748-15.306-6.365z" opacity=".11"></path><path fill="#ffe8be" fillRule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 01-1.472-7.659zM44.135 24.046c3.07 1.339.465 7.686-1.466 7.657a31.978 31.978 0 001.466-7.657z"></path><path fill="#ecbe6a" fillRule="evenodd" d="M44.123 24.17s7.96-11.785-2.636-16.334a11.881 11.881 0 0 0-12.87-5.22C22.775 3.805 20.604 6.7 20.604 6.7s-5.53 5.014-10.44 5.117a9.774 9.774 0 0 0 6.28 1.758c-.672 1.68-1.965 7.21 1.989 10.854 4.368-2.868 8.012-8.477 8.012-8.477s.982 3.257.207 4.86a18.879 18.879 0 0 0 7.922-3.531c2.542-2.036 3.893-4.297 5.31-4.326 3.256-.069 4.213 9.74 4.24 11.216z"></path><path fill="#498bd9" fillRule="evenodd" d="M53.456 52.022A30.766 30.766 0 0 1 30.9 61.829a31.163 31.163 0 0 1-3.833-.237 34.01 34.01 0 0 1-11.15-3.644 31.007 31.007 0 0 1-7.849-6.225l1.282-3.1 13.91-6.212c.625 3.723 7.806 8.175 7.806 8.175s7.213-3.412 8.087-8.211l12.777 6.281z"></path><g clipPath="url(#a)"><path fill="#545f69" fillRule="evenodd" d="M14.112 46.496l6.814-3.042 10.209 13.978 10.328-13.938 5.949 2.831v20.033h-33.3V46.496z"></path><g clipPath="url(#b)"><path fill="#434955" fillRule="evenodd" d="M37.79 42.881h.732v21.382h-.732V42.881zm-14.775 0h.731v21.382h-.73V42.881zm-2.981 0h.731v21.382h-.731V42.881zm-2.944 0h.731v21.382h-.73V42.881zm-2.981 0h.731v21.382h-.731V42.881zm20.708 0h.731v21.382h-.731V42.881zm-2.981 0h.731v21.382h-.731V42.881zm-2.944 0h.731v21.382h-.731V42.881zm-2.981 0h.731v21.382h-.731V42.881zm20.785 0h.732v21.382h-.732V42.881zm-2.98 0h.73v21.382h-.73V42.881zm-2.944 0h.73v21.382h-.73z"></path></g></g><path fill="#58b0e0" fillRule="evenodd" d="M23.265 41.27l7.802 9.316-6.305 3.553-4.823-10.591 3.326-2.278zM39.155 41.45l-8.088 9.136 6.518 3.553 4.777-10.719-3.207-1.97z"></path><path fill="#464449" fillRule="evenodd" d="M21.637 23.157h6.416a1.58 1.58 0 011.119.464v.002a1.579 1.579 0 01.464 1.117v2.893a1.585 1.585 0 01-1.583 1.583h-6.416a1.578 1.578 0 01-1.116-.465h-.002a1.58 1.58 0 01-.464-1.118V24.74a1.579 1.579 0 01.464-1.117l.002-.002a1.578 1.578 0 011.116-.464zm6.416.85h-6.416a.735.735 0 00-.517.214l-.001.002a.735.735 0 00-.214.517v2.893a.73.73 0 00.215.517.735.735 0 00.517.215h6.416a.735.735 0 00.732-.732V24.74a.734.734 0 00-.214-.518.731.731 0 00-.518-.215zM34.548 23.157h6.416a1.58 1.58 0 011.118.464v.002a1.579 1.579 0 01.465 1.117v2.893a1.585 1.585 0 01-1.583 1.583h-6.416a1.58 1.58 0 01-1.117-.465l-.001-.002a1.58 1.58 0 01-.465-1.116V24.74a1.58 1.58 0 01.465-1.117l.002-.001a1.58 1.58 0 011.116-.465zm6.416.85h-6.416a.73.73 0 00-.517.214l-.001.002a.729.729 0 00-.214.517v2.893a.73.73 0 00.214.517l.001.001a.73.73 0 00.517.214h6.416a.735.735 0 00.732-.732V24.74a.734.734 0 00-.214-.518h-.001a.731.731 0 00-.517-.215z"></path><path fill="#464449" d="M29.415 24.506h3.845v.876h-3.845z"></path></g></g></svg>,
    // <svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#e9573e"></circle><path fill="#f9dca4" fillRule="evenodd" d="M23.255 38.68l15.907.149v3.617l7.002 3.339-15.687 14.719-13.461-15.34 6.239-2.656V38.68z"></path><path fill="#677079" fillRule="evenodd" d="M53.478 51.993A30.813 30.813 0 0 1 30.9 61.8a31.226 31.226 0 0 1-3.837-.237A34.071 34.071 0 0 1 15.9 57.919a31.034 31.034 0 0 1-7.856-6.225l1.283-3.1 11.328-5.054c.875 4.536 4.235 11.535 10.176 15.502a24.128 24.128 0 0 0 11.057-15.318l10.063 4.903z"></path><path fillRule="evenodd" d="M39.791 42.745c.728.347 1.973.928 2.094.999-2.03 6.368-15.72 8.7-19.756-.756z" opacity=".11"></path><path fill="#ffe8be" fillRule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.974 31.974 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 001.471-7.658z"></path><path fill="#ad835f" fillRule="evenodd" d="M23.396 15.437c-.592 2.768-.384 5.52-3.008 6.028-.624.12-1.037.965-1.172 1.71a22.896 22.896 0 00-.38 4.931c.104.569-.396-1.092-.396-1.092l-.085-3.174s-.037-.608-.023-1.535c.03-1.88.244-4.928 1.196-5.86 1.421-1.39 3.868-1.008 3.868-1.008zM39.095 15.437c.592 2.768.385 5.52 3.008 6.028.624.12 1.038.965 1.172 1.71a21.808 21.808 0 01.312 4.947c-.105.57.395-1.092.395-1.092l.166-3.178s.025-.62.01-1.547c-.028-1.88-.242-4.928-1.195-5.86-1.421-1.39-3.868-1.008-3.868-1.008z"></path><path fill="#60350a" fillRule="evenodd" d="M25.364 46.477c-1.51-1.457-2.718-2.587-3.814-3.718-1.405-1.451-1.881-2.922-2.154-5.498a110.846 110.846 0 01-1.043-13.43s1.034 6.333 2.962 9.455c.99 1.603 5.04-2.165 6.655-2.738a2.683 2.683 0 013.24.782 2.636 2.636 0 013.213-.782c1.616.573 5.61 3.792 6.656 2.738 2.515-2.536 3.057-9.446 3.057-9.446a113.885 113.885 0 01-1.129 13.576c-.363 2.746-.547 3.81-1.486 4.884a30.775 30.775 0 01-4.57 4.193c-.828.656-2.267 1.272-5.933 1.25-3.406-.02-4.803-.446-5.654-1.267zM39.604 15.997a2.638 2.638 0 012.76 1.227c1.556 2.613 1.685 2.95 1.685 2.95s-.184-4.674-.295-5.23a.697.697 0 01.973.028c.11.222-.444-4.7-3.335-5.644-1.057-3.002-4.754-5.226-4.754-5.226l-.167 1.668a6.056 6.056 0 00-5.265-4.145c.667.751.507 1.3.507 1.3a8.152 8.152 0 00-3.288-.632c.14.889-.889 1.835-.889 1.835s-.639-.974-3.169-1.307c-.445 1.612-1.28 1.89-2.085 2.641a18.92 18.92 0 00-1.861 2.224s.083-1.557.639-2.002c.209-.138-4.716 1.803-2.252 9.036a1.962 1.962 0 00-1.945 1.462c1.39.389.815 2.49 1.593 3.852.547-1.58.909-4.658 4.328-3.852 2.448.577 4.798 1.814 7.62 1.913 3.987.139 5.501-1.954 9.2-2.098z"></path><path fill="#ffe8be" fillRule="evenodd" d="M32.415 38.594a2.774 2.774 0 0 0 2.214-.588c.72-.83 1.307-2.009.215-2.643a8.583 8.583 0 0 0-3.581-1.472 8.595 8.595 0 0 0-3.604 1.47c-1.34.775-.52 1.815.201 2.645a2.774 2.774 0 0 0 2.214.588c-.811-2.824 3.153-2.824 2.341 0z"></path></g></g></svg>,
    // <svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#9f82bb"></circle><path fill="#f9dca4" fillRule="evenodd" d="m23.255 38.68 15.907.121v12.918l-15.907-.121V38.68z"></path><path fill="#434955" fillRule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.206 31.206 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.114 8.47-5.475 8.47-10.15l12.79 6.282z"></path><path fillRule="evenodd" d="M39.166 38.778v3.58a7.785 7.785 0 0 1-.099 1.18 6.52 6.52 0 0 1-.395 1.405c-5.374 4.164-13.939.748-15.306-6.365z" opacity=".11"></path><path fill="#ffe8be" fillRule="evenodd" d="M31.129 8.432c21.281 0 12.988 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.977 31.977 0 0 1-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.998 31.998 0 0 0 1.471-7.658z"></path><path fill="#677079" fillRule="evenodd" d="M23.252 42.382a48.332 48.332 0 0 0-13.204 5.288c-1.645.945-1.605 2.399-1.237 2.926 1.316 1.882 5.551-.522 7.089-1.16a84.89 84.89 0 0 1 8.041-2.989 8.592 8.592 0 0 1-.689-4.065z"></path><path fill="#fff" fillRule="evenodd" d="M31.209 60.625c-3.027-2.19-7.913-8.17-7.957-15.213 0 7.68 15.91 7.65 15.91-.03-.652 8.036-4.983 13.179-7.953 15.243z"></path><path fill="#677079" fillRule="evenodd" d="M39.277 42.157a52.227 52.227 0 0 1 12.192 5.326c1.645.945 1.605 2.398 1.237 2.925-1.316 1.882-5.551-.522-7.089-1.159-2.98-1.235-6.154-2.87-7.03-3.027a8.591 8.591 0 0 0 .69-4.065zM23.255 40.89c-.112 7.495 5.759 14.21 10.055 20.18.13.18-.127-.179 0 0-.573-.033-.78.44-1.379.345-5.324-.843-11.383-3.965-12.981-6.47-.303-.474 3.34-3.912 3.151-4.434-.102-.284-3.172.096-4.918.647-.128.04-.142-.238-.171-.369-.809-3.712.593-7.876 6.243-9.9z"></path><path fill="#434955" fillRule="evenodd" d="M31.53 60.085a.353.353 0 1 1-.108.697 26.957 26.957 0 0 1-7.175-2.247 10.997 10.997 0 0 1-4.466-3.401c-.27-.425.587-1.526 1.49-2.68a12.29 12.29 0 0 0 1.643-2.343 8.808 8.808 0 0 0-1.615-.029 15.84 15.84 0 0 0-3.093.374c-.11.027-.219.058-.324.09l-.024.007a.41.41 0 0 1-.48-.236 2.304 2.304 0 0 1-.21-.817 6.746 6.746 0 0 1-.005-1.304 8.368 8.368 0 0 1 5.613-7.133.353.353 0 0 1 .263.656 7.681 7.681 0 0 0-5.17 6.538 6.032 6.032 0 0 0 .002 1.166 3.059 3.059 0 0 0 .061.373l.105-.027a16.624 16.624 0 0 1 3.246-.392 4.106 4.106 0 0 1 2.163.337.35.35 0 0 1 .129.149.303.303 0 0 1 .016.041l.008.027c.129.52-.846 1.77-1.773 2.957a219.53 219.53 0 0 0-1.45 1.866 10.353 10.353 0 0 0 4.179 3.145 26.217 26.217 0 0 0 6.975 2.186z"></path><path fill="#677079" fillRule="evenodd" d="M39.162 40.89c.116 7.721-6.387 14.71-10.71 20.813 9.957.15 13.058-4.555 15.016-6.759.373-.42-3.34-3.911-3.151-4.433.102-.284 3.172.096 4.917.647.129.04.143-.237.172-.369.809-3.712-.593-7.876-6.244-9.9z"></path><path fill="#434955" fillRule="evenodd" d="M29.313 61.2a.353.353 0 1 1 .061-.704 14.12 14.12 0 0 0 6.967-1.355 14.012 14.012 0 0 0 5.72-4.387c.002-.004-.706-.911-1.45-1.865-.927-1.188-1.902-2.438-1.773-2.958l.007-.026a.346.346 0 0 1 .017-.042.355.355 0 0 1 .129-.15 4.107 4.107 0 0 1 2.162-.336 16.624 16.624 0 0 1 3.247.392l.104.027a3.037 3.037 0 0 0 .061-.373 6.032 6.032 0 0 0 .002-1.166 7.681 7.681 0 0 0-5.17-6.537.353.353 0 0 1 .264-.656 8.368 8.368 0 0 1 5.612 7.132 6.746 6.746 0 0 1-.005 1.304 2.304 2.304 0 0 1-.21.817.41.41 0 0 1-.48.236l-.024-.006a5.414 5.414 0 0 0-.323-.091 15.84 15.84 0 0 0-3.094-.373 8.81 8.81 0 0 0-1.614.028 12.27 12.27 0 0 0 1.644 2.343c.902 1.156 1.76 2.256 1.489 2.68a14.749 14.749 0 0 1-6.024 4.652 14.815 14.815 0 0 1-7.319 1.413z"></path><circle cx="40.111" cy="54.597" r=".839" fill="#e6e6e6"></circle><circle cx="22.427" cy="54.597" r=".839" fill="#e6e6e6"></circle><circle cx="19.315" cy="48.072" r=".839" fill="#e6e6e6"></circle><circle cx="43.202" cy="48.072" r=".839" fill="#e6e6e6"></circle><path fill="#464449" fillRule="evenodd" d="M17.034 25.782a2.746 2.746 0 0 1 .582-1.205 12.17 12.17 0 0 0 2.22 7.126c-1.575-14.925 1.527-17.546 1.527-17.546s9.318 7.031 19.669-.019c0 0 3.279 2.639 1.704 17.564 1.575-2.325 1.93-4.307 2.044-7.195a2.466 2.466 0 0 1 .716 1.406s1.774-9.07-2.154-14.081c.356-.563 2.175-2.139 2.737-2.101s-2.4-1.2-6-.6a10.935 10.935 0 0 1 2.963-2.213 21.344 21.344 0 0 0-5.55-.338 16.103 16.103 0 0 1 3.375-1.95 15.98 15.98 0 0 0-8.888-.112 14.069 14.069 0 0 1 3.675-3.075s-9.487.525-14.437 7.575a5.614 5.614 0 0 1 .096-3.413s-6.263 5.879-4.279 20.177zM31.259 46.344c-6.417-2.945-3.82-7.121-3.82-7.121a2.47 2.47 0 0 0 1.68 2.037 5.907 5.907 0 0 1 2.14-2.476 7.359 7.359 0 0 1 2.095 2.476 2.471 2.471 0 0 0 1.68-2.037s2.64 4.176-3.775 7.121z"></path><path fill="#677079" fillRule="evenodd" d="m20.887 24.242.063-.015c7.112-1.767 8.763.026 9.147.943a3.966 3.966 0 0 1 2.294.01c.376-.914 2.012-2.727 9.152-.953l.062.015 1.104.293a.361.361 0 0 1-.192.696l-.643-.174c.02 1.454-.316 5.533-4.67 5.845-4.64.331-4.935-3.882-4.932-5.001a3.192 3.192 0 0 0-2.051-.014c.005 1.099-.274 5.347-4.933 5.015-4.354-.312-4.69-4.391-4.67-5.845l-.642.174a.361.361 0 1 1-.193-.696z"></path><path fill="#e6e6e6" fillRule="evenodd" d="M36.128 23.883a10.984 10.984 0 0 1 2.434-.019l-2.901 6.513a3.908 3.908 0 0 1-1.896-1.19l2.363-5.304zm-11.576-.32a12.06 12.06 0 0 1 2.67-.021l-3.183 7.142a4.286 4.286 0 0 1-2.078-1.304l2.59-5.816zm3.59.154-3.246 7.145q.19.025.392.04c.082.005.163.01.242.013l3.182-7.002a4.536 4.536 0 0 0-.57-.195zm11.26.307-2.96 6.515q.173.023.357.036c.075.005.149.01.221.012l2.902-6.385a4.245 4.245 0 0 0-.52-.178z" opacity=".5"></path><path fill="#464449" fillRule="evenodd" d="M20.887 24.242a.351.351 0 0 1 .063-.015c7.112-1.767 8.763.026 9.147.943a3.966 3.966 0 0 1 2.294.01c.376-.914 2.012-2.727 9.152-.953a.34.34 0 0 1 .062.015c.355.089.722.186 1.104.293a.361.361 0 0 1-.192.696c-.22-.061-.433-.119-.643-.174.02 1.454-.316 5.533-4.67 5.845-4.64.331-4.935-3.882-4.932-5.001a3.192 3.192 0 0 0-2.051-.014c.005 1.099-.274 5.347-4.933 5.015-4.354-.312-4.69-4.391-4.67-5.845-.21.055-.423.113-.642.174a.361.361 0 1 1-.193-.696c.382-.107.749-.204 1.104-.292zm16.266 5.938c3.957-.283 4.04-4.267 3.994-5.308-7.813-1.915-8.132.574-8.145.775L33 25.67c0 .014-.353 4.831 4.152 4.51zM20.95 24.227l.091-.002a.339.339 0 0 0-.092.002zm.396.644c-.047 1.042.037 5.026 3.993 5.309 4.505.321 4.153-4.496 4.152-4.51v-.023c-.014-.201-.333-2.69-8.145-.775z"></path></g></g></svg>,
    // <svg style={{height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.501 74.664" id="avatar"><defs><clipPath id="a"><path fill="none" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.206 31.206 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.114 8.47-5.475 8.47-10.15l12.79 6.282z" clipRule="evenodd"></path></clipPath></defs><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#3dbc93"></circle><path fill="#e9573e" fillRule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.206 31.206 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.114 8.47-5.475 8.47-10.15l12.79 6.282z"></path><g clipPath="url(#a)"><path fillRule="evenodd" d="M.694 74.664v-.762H66.5v.762H.694zm9.401-40.977v2.237h2.215v-2.237zm0 3v2.24h2.215v-2.24zm0 3.002v1.86h2.215v-1.86zm0 2.622v2.24h2.215v-2.24zm0 3.002v2.237h2.215v-2.237zm0 3v2.24h2.215v-2.24zm0 3.002v1.956h2.215v-1.956zm0 2.718v2.24h2.215v-2.24zm0 3.003v2.237h2.215v-2.237zm0 2.999v2.24h2.215v-2.24zm0 3.002v1.86h2.215v-1.86zm0 2.623v2.229h-.753v-2.23H.694v-.762h8.648v-1.86H.694v-.762h8.648v-2.24H.694v-.762h8.648v-2.237H.694v-.763h8.648v-2.24H.694v-.762h8.648v-1.956H.694v-.762h8.648v-2.24H.694v-.763h8.648v-2.237H.694v-.762h8.648v-2.24H.694v-.762h8.648v-1.86H.694v-.763h8.648v-2.24H.694v-.762h8.648v-2.237H.694v-.763H66.5v.763h-12.92v2.237H66.5v.762h-12.92v2.24H66.5v.763h-12.92v1.86H66.5v.762h-12.92v2.24H66.5v.762h-12.92v2.237H66.5v.763h-12.92v2.24H66.5v.762h-12.92v1.956H66.5v.762h-12.92v2.24H66.5v.763h-12.92v2.237H66.5v.762h-12.92v2.24H66.5v.762h-12.92v1.86H66.5v.762h-12.92v2.23h-.755v-2.23h-2.214v2.23h-.755v-2.23h-2.211v2.23h-.754v-2.23h-2.215v2.23h-.754v-2.23h-1.838v2.23h-.754v-2.23h-2.215v2.23h-.754v-2.23H36.15v2.23h-.754v-2.23h-2.215v2.23h-.754v-2.23h-1.933v2.23h-.754v-2.23h-2.215v2.23h-.753v-2.23H24.56v2.23h-.754v-2.23H21.59v2.23h-.754v-2.23H19v2.23h-.754v-2.23H16.03v2.23h-.754v-2.23h-2.212v2.23h-.754v-2.23zm24.627-35.738h31.78v.762H.693v-.762h34.028zm18.104 3.765h-2.214v2.237h2.214v-2.237zm-2.969 0h-2.211v2.237h2.211v-2.237zm-2.965 0h-2.215v2.237h2.215v-2.237zm-2.969 0h-1.838v2.237h1.838v-2.237zm-2.592 0h-2.215v2.237h2.215v-2.237zm-2.969 0H36.15v2.237h2.212v-2.237zm-2.966 0h-2.215v2.237h2.215v-2.237zm-2.969 0h-1.933v2.237h1.933v-2.237zm-2.687 0h-2.215v2.237h2.216v-2.237zm-2.969 0H24.56v2.237h2.212v-2.237zm-2.965 0H21.59v2.237h2.215v-2.237zm-2.969 0H19v2.237h1.838v-2.237zm-2.592 0H16.03v2.237h2.215v-2.237zm-2.97 0h-2.21v2.237h2.21v-2.237zm37.551 3h-2.214v2.24h2.214v-2.24zm-2.969 0h-2.211v2.24h2.211v-2.24zm-2.965 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.838v2.24h1.838v-2.24zm-2.592 0h-2.215v2.24h2.215v-2.24zm-2.969 0H36.15v2.24h2.212v-2.24zm-2.966 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.933v2.24h1.933v-2.24zm-2.687 0h-2.215v2.24h2.216v-2.24zm-2.969 0H24.56v2.24h2.212v-2.24zm-2.965 0H21.59v2.24h2.215v-2.24zm-2.969 0H19v2.24h1.838v-2.24zm-2.592 0H16.03v2.24h2.215v-2.24zm-2.97 0h-2.21v2.24h2.21v-2.24zm37.551 3.002h-2.214v1.86h2.214v-1.86zm-2.969 0h-2.211v1.86h2.211v-1.86zm-2.965 0h-2.215v1.86h2.215v-1.86zm-2.969 0h-1.838v1.86h1.838v-1.86zm-2.592 0h-2.215v1.86h2.215v-1.86zm-2.969 0H36.15v1.86h2.212v-1.86zm-2.966 0h-2.215v1.86h2.215v-1.86zm-2.969 0h-1.933v1.86h1.933v-1.86zm-2.687 0h-2.215v1.86h2.216v-1.86zm-2.969 0H24.56v1.86h2.212v-1.86zm-2.965 0H21.59v1.86h2.215v-1.86zm-2.969 0H19v1.86h1.838v-1.86zm-2.592 0H16.03v1.86h2.215v-1.86zm-2.97 0h-2.21v1.86h2.21v-1.86zm37.551 2.622h-2.214v2.24h2.214v-2.24zm-2.969 0h-2.211v2.24h2.211v-2.24zm-2.965 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.838v2.24h1.838v-2.24zm-2.592 0h-2.215v2.24h2.215v-2.24zm-2.969 0H36.15v2.24h2.212v-2.24zm-2.966 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.933v2.24h1.933v-2.24zm-2.687 0h-2.215v2.24h2.216v-2.24zm-2.969 0H24.56v2.24h2.212v-2.24zm-2.965 0H21.59v2.24h2.215v-2.24zm-2.969 0H19v2.24h1.838v-2.24zm-2.592 0H16.03v2.24h2.215v-2.24zm-2.97 0h-2.21v2.24h2.21v-2.24zm37.551 3.002h-2.214v2.237h2.214v-2.237zm-2.969 0h-2.211v2.237h2.211v-2.237zm-2.965 0h-2.215v2.237h2.215v-2.237zm-2.969 0h-1.838v2.237h1.838v-2.237zm-2.592 0h-2.215v2.237h2.215v-2.237zm-2.969 0H36.15v2.237h2.212v-2.237zm-2.966 0h-2.215v2.237h2.215v-2.237zm-2.969 0h-1.933v2.237h1.933v-2.237zm-2.687 0h-2.215v2.237h2.216v-2.237zm-2.969 0H24.56v2.237h2.212v-2.237zm-2.965 0H21.59v2.237h2.215v-2.237zm-2.969 0H19v2.237h1.838v-2.237zm-2.592 0H16.03v2.237h2.215v-2.237zm-2.97 0h-2.21v2.237h2.21v-2.237zm37.551 3h-2.214v2.24h2.214v-2.24zm-2.969 0h-2.211v2.24h2.211v-2.24zm-2.965 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.838v2.24h1.838v-2.24zm-2.592 0h-2.215v2.24h2.215v-2.24zm-2.969 0H36.15v2.24h2.212v-2.24zm-2.966 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.933v2.24h1.933v-2.24zm-2.687 0h-2.215v2.24h2.216v-2.24zm-2.969 0H24.56v2.24h2.212v-2.24zm-2.965 0H21.59v2.24h2.215v-2.24zm-2.969 0H19v2.24h1.838v-2.24zm-2.592 0H16.03v2.24h2.215v-2.24zm-2.97 0h-2.21v2.24h2.21v-2.24zm37.551 3.002h-2.214v1.956h2.214v-1.956zm-2.969 0h-2.211v1.956h2.211v-1.956zm-2.965 0h-2.215v1.956h2.215v-1.956zm-2.969 0h-1.838v1.956h1.838v-1.956zm-2.592 0h-2.215v1.956h2.215v-1.956zm-2.969 0H36.15v1.956h2.212v-1.956zm-2.966 0h-2.215v1.956h2.215v-1.956zm-2.969 0h-1.933v1.956h1.933v-1.956zm-2.687 0h-2.215v1.956h2.216v-1.956zm-2.969 0H24.56v1.956h2.212v-1.956zm-2.965 0H21.59v1.956h2.215v-1.956zm-2.969 0H19v1.956h1.838v-1.956zm-2.592 0H16.03v1.956h2.215v-1.956zm-2.97 0h-2.21v1.956h2.21v-1.956zm37.551 2.718h-2.214v2.24h2.214v-2.24zm-2.969 0h-2.211v2.24h2.211v-2.24zm-2.965 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.838v2.24h1.838v-2.24zm-2.592 0h-2.215v2.24h2.215v-2.24zm-2.969 0H36.15v2.24h2.212v-2.24zm-2.966 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.933v2.24h1.933v-2.24zm-2.687 0h-2.215v2.24h2.216v-2.24zm-2.969 0H24.56v2.24h2.212v-2.24zm-2.965 0H21.59v2.24h2.215v-2.24zm-2.969 0H19v2.24h1.838v-2.24zm-2.592 0H16.03v2.24h2.215v-2.24zm-2.97 0h-2.21v2.24h2.21v-2.24zm37.551 3.003h-2.214v2.237h2.214v-2.237zm-2.969 0h-2.211v2.237h2.211v-2.237zm-2.965 0h-2.215v2.237h2.215v-2.237zm-2.969 0h-1.838v2.237h1.838v-2.237zm-2.592 0h-2.215v2.237h2.215v-2.237zm-2.969 0H36.15v2.237h2.212v-2.237zm-2.966 0h-2.215v2.237h2.215v-2.237zm-2.969 0h-1.933v2.237h1.933v-2.237zm-2.687 0h-2.215v2.237h2.216v-2.237zm-2.969 0H24.56v2.237h2.212v-2.237zm-2.965 0H21.59v2.237h2.215v-2.237zm-2.969 0H19v2.237h1.838v-2.237zm-2.592 0H16.03v2.237h2.215v-2.237zm-2.97 0h-2.21v2.237h2.21v-2.237zm37.551 2.999h-2.214v2.24h2.214v-2.24zm-2.969 0h-2.211v2.24h2.211v-2.24zm-2.965 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.838v2.24h1.838v-2.24zm-2.592 0h-2.215v2.24h2.215v-2.24zm-2.969 0H36.15v2.24h2.212v-2.24zm-2.966 0h-2.215v2.24h2.215v-2.24zm-2.969 0h-1.933v2.24h1.933v-2.24zm-2.687 0h-2.215v2.24h2.216v-2.24zm-2.969 0H24.56v2.24h2.212v-2.24zm-2.965 0H21.59v2.24h2.215v-2.24zm-2.969 0H19v2.24h1.838v-2.24zm-2.592 0H16.03v2.24h2.215v-2.24zm-2.97 0h-2.21v2.24h2.21v-2.24zm37.551 3.002h-2.214v1.86h2.214v-1.86zm-2.969 0h-2.211v1.86h2.211v-1.86zm-2.965 0h-2.215v1.86h2.215v-1.86zm-2.969 0h-1.838v1.86h1.838v-1.86zm-2.592 0h-2.215v1.86h2.215v-1.86zm-2.969 0H36.15v1.86h2.212v-1.86zm-2.966 0h-2.215v1.86h2.215v-1.86zm-2.969 0h-1.933v1.86h1.933v-1.86zm-2.687 0h-2.215v1.86h2.216v-1.86zm-2.969 0H24.56v1.86h2.212v-1.86zm-2.965 0H21.59v1.86h2.215v-1.86zm-2.969 0H19v1.86h1.838v-1.86zm-2.592 0H16.03v1.86h2.215v-1.86zm-2.97 0h-2.21v1.86h2.21v-1.86zM34.723 67.9h31.78v.762H.693V67.9h34.028zm0 2.999h31.78v.763H.693v-.763h34.028z" opacity=".18"></path></g><path fill="#f9dca4" fillRule="evenodd" d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"></path><path fill="#677079" fillRule="evenodd" d="M39.162 60.682a31.097 31.097 0 0 1-15.907.164v-13.26c3.922 4.713 11.848 4.664 15.907.121z"></path><path fillRule="evenodd" d="M39.165 43.46v2.258c0 .161.002 1.46-.003 1.467-4.75 3.472-14.539 1.365-15.907-3.124z" opacity=".11"></path><path fill="#ffe8be" fillRule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 01-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 001.471-7.658z"></path><path fill="#434955" fillRule="evenodd" d="M23.258 53.239l-2.404-2.236-4.803 2.358 7.205-13.65.002 13.528zM39.157 53.239l2.404-2.237 4.804 2.359-7.206-13.651-.002 13.529z"></path><path fill="#60350a" fillRule="evenodd" d="M18.368 23.94C15.536 18.98 14.68 15.73 16.1 13.29c2.049-3.52 6.571-3.089 6.965-3.918 4.025-8.479 24.839-2.048 23.97 11.09a14.806 14.806 0 0 0-1.522-2.486s-.075 4.991-1.437 6.957c-1.663-2.874-6.427-5.747-6.427-5.747s1.285 4.31 2.117 5.218c-1.074-.094-13.159-3.479-16.26-13.537-4.007 2.269-5.29 9.366-5.14 13.072z"></path><path fill="#60350a" fillRule="evenodd" d="M31.15 46.543c-2.66.022-15.053.136-12.796-22.713 0 0 .835 6.584 2.96 9.456a2.566 2.566 0 0 0 3.822.746c1.16-.835 1.397-2.407 2.834-2.917a2.68 2.68 0 0 1 3.24.782 2.633 2.633 0 0 1 3.213-.782c1.437.51 1.675 2.082 2.834 2.917a2.566 2.566 0 0 0 3.821-.746c2.126-2.873 2.962-9.456 2.962-9.456 2.256 22.85-10.23 22.735-12.89 22.713z"></path><path fill="#362008" fillRule="evenodd" d="M23.94 35.855s5.64 1.699 7.233-3.5l.023-.075.022.075c1.592 5.199 7.234 3.5 7.234 3.5-2.977 2.458-5.176-.206-7.285-.154-2.273.056-4.335 2.542-7.228.154z"></path></g></g></svg>
    // ];
    // if(cacheAvatar[username]){
    //     avatar = cacheAvatar[username]
    // }else{
    //     cacheAvatar[username] = avatarsIcons[randomAva]
    //     avatar = avatarsIcons[randomAva]
    // }
    
    return (<>
            {/* {avatarsIcons[0]} */}
            <svg onClick={onClick} style={{...styles,height:"40px",width:"40px",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#ffc200"></circle><path fill="#677079" fillRule="evenodd" d="M52.587 52.908a30.895 30.895 0 0 1-43.667-.291 9.206 9.206 0 0 1 4.037-4.832 19.799 19.799 0 0 1 4.075-2.322c-2.198-7.553 3.777-11.266 6.063-12.335 0 3.487 3.265 1.173 7.317 1.217 3.336.037 9.933 3.395 9.933-1.035 3.67 1.086 7.67 8.08 4.917 12.377a17.604 17.604 0 0 1 3.181 2.002 10.192 10.192 0 0 1 4.144 5.22z"></path><path fill="#f9dca4" fillRule="evenodd" d="m24.032 38.68 14.92.09v3.437l-.007.053a2.784 2.784 0 0 1-.07.462l-.05.341-.03.071c-.966 5.074-5.193 7.035-7.803 8.401-2.75-1.498-6.638-4.197-6.947-8.972l-.013-.059v-.2a8.897 8.897 0 0 1-.004-.207c0 .036.003.07.004.106z"></path><path fillRule="evenodd" d="M38.953 38.617v4.005a7.167 7.167 0 0 1-.095 1.108 6.01 6.01 0 0 1-.38 1.321c-5.184 3.915-13.444.704-14.763-5.983z" opacity=".11"></path><path fill="#f9dca4" fillRule="evenodd" d="M18.104 25.235c-4.94 1.27-.74 7.29 2.367 7.264a19.805 19.805 0 0 1-2.367-7.264zM43.837 25.235c4.94 1.27.74 7.29-2.368 7.263a19.8 19.8 0 0 0 2.368-7.263z"></path><path fill="#ffe8be" fillRule="evenodd" d="M30.733 11.361c20.523 0 12.525 32.446 0 32.446-11.83 0-20.523-32.446 0-32.446z"></path><path fill="#8a5c42" fillRule="evenodd" d="M21.047 22.105a1.738 1.738 0 0 1-.414 2.676c-1.45 1.193-1.503 5.353-1.503 5.353-.56-.556-.547-3.534-1.761-5.255s-2.032-13.763 4.757-18.142a4.266 4.266 0 0 0-.933 3.6s4.716-6.763 12.54-6.568a5.029 5.029 0 0 0-2.487 3.26s6.84-2.822 12.54.535a13.576 13.576 0 0 0-4.145 1.947c2.768.076 5.443.59 7.46 2.384a3.412 3.412 0 0 0-2.176 4.38c.856 3.503.936 6.762.107 8.514-.829 1.752-1.22.621-1.739 4.295a1.609 1.609 0 0 1-.77 1.214c-.02.266.382-3.756-.655-4.827-1.036-1.07-.385-2.385.029-3.163 2.89-5.427-5.765-7.886-10.496-7.88-4.103.005-14 1.87-10.354 7.677z"></path><path fill="#434955" fillRule="evenodd" d="M19.79 49.162c.03.038 10.418 13.483 22.63-.2-1.475 4.052-7.837 7.27-11.476 7.26-6.95-.02-10.796-5.6-11.154-7.06z"></path><path fill="#e6e6e6" fillRule="evenodd" d="M36.336 61.323c-.41.072-.822.135-1.237.192v-8.937a.576.576 0 0 1 .618-.516.576.576 0 0 1 .619.516v8.745zm-9.82.166q-.622-.089-1.237-.2v-8.711a.576.576 0 0 1 .618-.516.576.576 0 0 1 .62.516z"></path></g></g></svg>

        </>
    )
}

export default Avatars;

// female
