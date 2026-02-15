<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>@xo0i | iMac OS</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Chicago&family=Geneva&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* [Previous CSS remains the same] */
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
        
        :root {
            --mac-platinum: #dddddd;
            --mac-dark: #999999;
            --mac-darker: #666666;
            --mac-light: #ffffff;
            --mac-black: #000000;
        }

        * {
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
        }

        html, body {
            font-family: 'Geneva', 'Lucida Grande', sans-serif;
            background: #0a0a0a;
            color: #000;
            overflow: hidden;
            margin: 0;
            width: 100%;
            height: 100%;
            position: fixed;
        }

        .chicago { font-family: 'Chicago', 'Times New Roman', serif; }
        .times { font-family: 'Times New Roman', serif; }

        .crt-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px);
            pointer-events: none;
            z-index: 9999;
            animation: flicker 0.15s infinite;
        }

        @keyframes flicker {
            0% { opacity: 0.97; }
            50% { opacity: 1; }
            100% { opacity: 0.98; }
        }

        .imac-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(ellipse at center, #2a2a2a 0%, #000000 100%);
            position: relative;
            padding: 10px;
        }

        .imac-bezel {
            width: 100%;
            height: 100%;
            max-width: 1200px;
            max-height: 900px;
            background: #e8e8e8;
            border-radius: 20px;
            padding: 15px;
            box-shadow: inset 0 0 0 2px #000, inset 0 0 0 4px #fff, inset 0 0 0 6px #999, 0 20px 60px rgba(0,0,0,0.9), inset 0 0 100px rgba(255,255,255,0.1);
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .imac-bezel::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            background: #333;
            border-radius: 50%;
            box-shadow: inset 0 0 2px rgba(0,0,0,0.8);
        }

        .imac-screen {
            flex: 1;
            background: #c0c0c0;
            border: 2px solid #333;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
            box-shadow: inset 0 0 100px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
        }

        @media (max-width: 768px) {
            .imac-container { padding: 5px; }
            .imac-bezel { border-radius: 15px; padding: 10px; }
            .imac-bezel::before { display: none; }
        }

        #boot-screen {
            position: absolute;
            inset: 0;
            background: #000;
            z-index: 100;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
        }

        .boot-logo {
            width: 80px;
            height: 80px;
            border: 3px solid #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin-bottom: 15px;
            animation: bootPulse 1s ease-in-out infinite;
        }

        @media (max-width: 768px) {
            .boot-logo { width: 60px; height: 60px; font-size: 24px; }
        }

        @keyframes bootPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
        }

        .progress-bar {
            width: 150px;
            height: 16px;
            border: 2px solid #fff;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
        }

        @media (max-width: 768px) {
            .progress-bar { width: 120px; height: 12px; }
        }

        .progress-fill {
            height: 100%;
            background: #fff;
            width: 0%;
            animation: bootProgress 3s ease-in-out forwards;
        }

        @keyframes bootProgress {
            0% { width: 0%; }
            100% { width: 100%; }
        }

        .menu-bar {
            background: linear-gradient(to bottom, #ffffff 0%, #dddddd 100%);
            border-bottom: 1px solid #000;
            height: auto;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 2px 8px;
            font-size: 12px;
            font-weight: bold;
            box-shadow: 0 1px 0 #fff inset;
            flex-shrink: 0;
        }

        .menu-bar > span {
            padding: 2px 10px;
            cursor: pointer;
            position: relative;
            white-space: nowrap;
        }

        .menu-bar > span:hover { background: #000; color: #fff; }

        .menu-dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #e0e0e0;
            border: 1px solid #000;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
            min-width: 150px;
            z-index: 1000;
        }

        .menu-bar > span:hover .menu-dropdown { display: block; }
        .menu-item { padding: 6px 20px; font-size: 11px; cursor: pointer; }
        .menu-item:hover { background: #000; color: #fff; }
        .menu-divider { height: 1px; background: #999; margin: 4px 0; }

        @media (max-width: 768px) {
            .menu-bar { font-size: 11px; padding: 2px 4px; }
            .menu-bar > span { padding: 4px 6px; }
            .menu-dropdown { position: fixed; left: 0; right: 0; top: 30px; width: 100%; }
        }

        .desktop {
            flex: 1;
            background: #808080;
            position: relative;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }

        .desktop-pattern {
            position: absolute;
            inset: 0;
            background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
                              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px);
            pointer-events: none;
        }

        .mac-window {
            background: #e0e0e0;
            border: 1px solid #000;
            box-shadow: 2px 2px 0 #000;
            position: absolute;
            min-width: 200px;
            max-width: 95vw;
            max-height: 80vh;
            animation: windowOpen 0.2s ease-out;
            display: flex;
            flex-direction: column;
        }

        @media (max-width: 768px) {
            .mac-window {
                position: fixed !important;
                top: 40px !important;
                left: 10px !important;
                right: 10px !important;
                width: auto !important;
                max-height: 70vh;
            }
        }

        @keyframes windowOpen {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        .window-titlebar {
            background: linear-gradient(to bottom, #fff 0%, #ccc 100%);
            border-bottom: 1px solid #000;
            padding: 4px;
            display: flex;
            align-items: center;
            gap: 4px;
            flex-shrink: 0;
            touch-action: none;
        }

        .window-titlebar.active { background: linear-gradient(to bottom, #ddd 0%, #999 100%); }

        .window-controls { display: flex; gap: 4px; }

        .close-box, .min-box, .max-box {
            width: 14px;
            height: 14px;
            border: 1px solid #000;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            cursor: pointer;
            flex-shrink: 0;
        }

        .close-box:active, .min-box:active, .max-box:active { background: #000; color: #fff; }

        .window-content {
            padding: 12px;
            overflow-y: auto;
            flex: 1;
            -webkit-overflow-scrolling: touch;
        }

        .window-resize {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 16px;
            height: 16px;
            cursor: se-resize;
            background: linear-gradient(135deg, transparent 50%, #000 50%);
        }

        @media (max-width: 768px) { .window-resize { display: none; } }

        .mac-btn {
            background: #e0e0e0;
            border: 2px solid;
            border-color: #fff #000 #000 #fff;
            padding: 6px 16px;
            font-size: 12px;
            cursor: pointer;
            font-family: inherit;
            touch-action: manipulation;
        }

        .mac-btn:active {
            border-color: #000 #fff #fff #000;
            padding: 7px 15px 5px 17px;
        }

        @media (max-width: 768px) {
            .mac-btn { padding: 10px 20px; font-size: 14px; }
            .mac-btn:active { padding: 11px 19px 9px 21px; }
        }

        ::-webkit-scrollbar { width: 12px; background: #e0e0e0; }
        ::-webkit-scrollbar-thumb { background: #c0c0c0; border: 2px solid; border-color: #fff #000 #000 #fff; }
        ::-webkit-scrollbar-button { background: #e0e0e0; border: 2px solid; border-color: #fff #000 #000 #fff; height: 12px; }

        @media (max-width: 768px) { ::-webkit-scrollbar { width: 8px; } }

        .desktop-icons-container {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        @media (max-width: 768px) {
            .desktop-icons-container {
                position: relative;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                padding: 10px;
                gap: 20px;
            }
        }

        .desktop-icon {
            width: 70px;
            text-align: center;
            cursor: pointer;
            user-select: none;
            transition: transform 0.1s;
        }

        @media (max-width: 768px) { .desktop-icon { width: 80px; } }
        .desktop-icon:hover, .desktop-icon:active { transform: translateY(-2px); }
        .desktop-icon.selected .icon-label { background: #000; color: #fff; }

        .icon-img {
            width: 44px;
            height: 44px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e0e0e0;
            border: 1px solid #999;
            box-shadow: inset 1px 1px 0 #fff, 2px 2px 0 rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) { .icon-img { width: 56px; height: 56px; } }

        .icon-label {
            font-size: 10px;
            margin-top: 4px;
            padding: 2px 4px;
            display: inline-block;
            text-shadow: 0 0 2px rgba(255,255,255,0.8);
            background: rgba(255,255,255,0.8);
            border-radius: 2px;
        }

        @media (max-width: 768px) { .icon-label { font-size: 11px; } }

        .floating-icon {
            position: absolute;
            width: 35px;
            height: 35px;
            opacity: 0.6;
            pointer-events: none;
            animation: float 10s ease-in-out infinite;
            filter: grayscale(100%) contrast(1.2) drop-shadow(2px 2px 0 rgba(0,0,0,0.3));
        }

        @media (max-width: 768px) { .floating-icon { width: 25px; height: 25px; opacity: 0.4; } }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }

        #ai-orb {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: radial-gradient(circle at 30% 30%, #fff, #888);
            border: 3px solid #000;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
            box-shadow: inset -4px -4px 8px rgba(0,0,0,0.3), 4px 4px 0 #000, 0 0 20px rgba(255,255,255,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            animation: orbFloat 4s ease-in-out infinite;
        }

        @media (max-width: 768px) { #ai-orb { width: 70px; height: 70px; bottom: 20px; right: 20px; } }

        @keyframes orbFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        #ai-orb:hover, #ai-orb:active {
            transform: scale(1.1);
            box-shadow: inset -4px -4px 8px rgba(0,0,0,0.3), 6px 6px 0 #000, 0 0 40px rgba(255,255,255,0.5);
        }

        #ai-orb i { font-size: 28px; color: #222; }

        .chat-window {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 340px;
            max-width: 90vw;
            z-index: 999;
            display: none;
        }

        @media (max-width: 768px) {
            .chat-window {
                position: fixed;
                bottom: 100px;
                left: 10px;
                right: 10px;
                width: auto;
            }
        }

        .chat-messages {
            height: 220px;
            overflow-y: auto;
            background: #fff;
            border: 2px inset #999;
            padding: 8px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 11px;
            line-height: 1.4;
        }

        @media (max-width: 768px) { .chat-messages { height: 250px; font-size: 13px; } }

        .chat-input-area { display: flex; margin-top: 4px; gap: 4px; }
        .chat-input { flex: 1; border: 2px inset #999; padding: 6px; font-family: inherit; font-size: 12px; }

        @media (max-width: 768px) { .chat-input { padding: 10px; font-size: 16px; } }

        .alert-box {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            max-width: 90vw;
            z-index: 2000;
            display: none;
        }

        .alert-content { display: flex; gap: 12px; align-items: flex-start; }
        .alert-icon { font-size: 32px; }

        #admin-modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.9);
            z-index: 2000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .admin-window { width: 400px; max-width: 100%; }
        .form-group { margin-bottom: 14px; }
        .form-group label { display: block; font-size: 11px; font-weight: bold; margin-bottom: 4px; }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            border: 2px inset #999;
            padding: 6px;
            font-family: inherit;
            font-size: 13px;
            background: #fff;
            box-sizing: border-box;
        }

        @media (max-width: 768px) {
            .form-group input,
            .form-group textarea,
            .form-group select { padding: 10px; font-size: 16px; }
        }

        .view-counter {
            position: absolute;
            bottom: 8px;
            right: 8px;
            font-size: 10px;
            color: #333;
            background: rgba(255,255,255,0.9);
            padding: 4px 10px;
            border: 1px solid #999;
            box-shadow: inset 1px 1px 0 #fff;
        }

        @media (max-width: 768px) { .view-counter { font-size: 11px; padding: 6px 12px; } }

        .context-menu {
            position: absolute;
            background: #e0e0e0;
            border: 1px solid #000;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
            min-width: 150px;
            z-index: 5000;
            display: none;
        }

        .context-item { padding: 10px 20px; font-size: 13px; cursor: pointer; }
        .context-item:hover { background: #000; color: #fff; }

        @media (max-width: 768px) { .context-item { padding: 14px 24px; font-size: 15px; } }

        #game-modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.95);
            z-index: 3000;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .game-canvas-container { position: relative; }
        .mobile-controls { display: none; margin-top: 15px; justify-content: center; gap: 20px; }

        @media (max-width: 768px) { .mobile-controls { display: flex; } }

        .control-btn {
            width: 70px;
            height: 70px;
            background: #e0e0e0;
            border: 3px solid;
            border-color: #fff #000 #000 #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            touch-action: manipulation;
        }

        .control-btn:active { border-color: #000 #fff #fff #000; background: #ccc; }
        .tooltip { position: absolute; background: #ffffcc; border: 1px solid #000; padding: 4px 8px; font-size: 11px; pointer-events: none; z-index: 6000; display: none; }

        .mobile-header { display: none; }

        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 12px;
                background: linear-gradient(to bottom, #fff, #ddd);
                border-bottom: 1px solid #000;
            }
            .menu-bar { display: none; }
        }

        .touch-device .mac-window { touch-action: pan-y; }
        .touch-device .desktop-icon { touch-action: manipulation; }
        .easter-trigger { position: absolute; width: 30px; height: 30px; opacity: 0; cursor: pointer; bottom: 0; right: 0; z-index: 100; }
    </style>
</head>
<body>

<div class="crt-overlay"></div>

<div class="imac-container">
    <div class="imac-bezel">
        <div class="imac-screen">
            
            <!-- Boot Screen -->
            <div id="boot-screen">
                <div class="boot-logo chicago">xo0i</div>
                <div class="times text-sm">Mac OS 9.2.2</div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
         
