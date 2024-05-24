import{_ as e,r as o,o as n,c as s,e as p,w as r,a,b as l,d as i}from"./app.5c7ccfba.js";var c="/assets/Figure-01-Transforms.de75ccd4.jpg",u="/assets/classic_batch.0ad4de3a.gif",d="/assets/Figure-03-Windowing.0d56726a.jpg",m="/assets/Windowed_Summation_On_Batch.e1636dc5.gif",k="/assets/Figure-05-Event_Time_vs_Processing_Time.c1fca4e4.png";const g={},h=a("h2",{id:"\u6765\u6E90",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u6765\u6E90","aria-hidden":"true"},"#"),l(" \u6765\u6E90")],-1),f=a("p",null,"\u5173\u4E8E\u6570\u636E\u5904\u7406\u6F14\u53D8\u4E24\u4E2A\u7CFB\u5217\u7684\u7B2C\u4E8C\u90E8\u5206",-1),_=i('<h2 id="_1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4ECB\u7ECD</h2><p>\u6B22\u8FCE\u56DE\u6765\uFF0C\u5982\u679C\u4F60\u9519\u8FC7\u4E86\u6211\u4E4B\u524D\u7684\u5E16\u5B50 \u2014\u2014 <a href="">The World beyond batch: Streaming 101</a>\uFF0C\u6211\u5F3A\u70C8\u5EFA\u8BAE\u60A8\u82B1\u65F6\u95F4\u5148\u9605\u8BFB\u8BE5\u5185\u5BB9\u3002\u5B83\u4E3A\u6211\u5C06\u5728\u8FD9\u7BC7\u6587\u7AE0\u4E2D\u4ECB\u7ECD\u7684\u4E3B\u9898\u5960\u5B9A\u4E86\u5FC5\u8981\u7684\u57FA\u7840\uFF0C\u5E76\u4E14\u6211\u5047\u8BBE\u60A8\u5DF2\u7ECF\u719F\u6089\u90A3\u91CC\u4ECB\u7ECD\u7684\u672F\u8BED\u548C\u6982\u5FF5\u3002<s>Caveat lector and all that.</s></p><p>\u53E6\u5916\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u5305\u542B\u8BB8\u591A\u52A8\u753B\uFF0C\u6240\u4EE5\u90A3\u4E9B\u8BD5\u56FE\u6253\u5370\u5B83\u7684\u4EBA\u4F1A\u9519\u8FC7\u4E00\u4E9B\u6700\u597D\u7684\u90E8\u5206\u3002<s>Caveat printor and all that.</s></p><p>\u7B80\u5355\u56DE\u987E\u4E00\u4E0B\uFF0C\u4E0A\u6B21\u6211\u7740\u91CD\u4E8E\u4E09\u4E2A\u4E3B\u8981\u9886\u57DF\uFF1A<mark>\u672F\u8BED(terminology)</mark>\uFF0C\u5F53\u6211\u4F7F\u7528\u7C7B\u4F3C&quot;streaming&quot;\u7B49\u91CD\u8F7D\u672F\u8BED\u65F6\uFF0C\u7CBE\u786E\u5B9A\u4E49\u6211(\u60F3\u8868\u8FBE)\u7684\u610F\u601D\uFF1B<mark>\u6279\u4E0E\u6D41\u7684\u6BD4\u8F83(batch versus streaming)</mark>\uFF0C\u6BD4\u8F83\u8FD9\u4E24\u79CD\u7CFB\u7EDF\u7684\u7406\u8BBA\u80FD\u529B\uFF0C\u5E76\u63D0\u51FA\u53EA\u6709\u5B8C\u6210\u4E24\u4EF6\u4E8B\u624D\u80FD\u4F7F\u6D41\u5F0F\u7CFB\u7EDF\u8D85\u8D8A\u6279\u5904\u7406\u7CFB\u7EDF\uFF1A\u6B63\u786E\u6027\u548C\u65F6\u95F4\u63A8\u7406\u5DE5\u5177\uFF1B<mark>\u6570\u636E\u5904\u7406\u6A21\u5F0F</mark>\uFF0C\u7814\u7A76\u6279\u5904\u7406\u7CFB\u7EDF\u548C\u6D41\u5F0F\u7CFB\u7EDF\u5728\u5904\u7406\u6709\u754C\u548C\u65E0\u754C\u6570\u636E\u65F6\u91C7\u7528\u7684\u57FA\u672C\u65B9\u6CD5\u3002</p><p>\u5728\u8FD9\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u60F3\u8FDB\u4E00\u6B65\u5173\u6CE8\u4E0A\u6B21\u7684\u6570\u636E\u5904\u7406\u6A21\u5F0F\uFF0C\u4F46\u66F4\u8BE6\u7EC6\uFF0C\u5E76\u4E14\u5728\u5177\u4F53\u793A\u4F8B\u7684\u80CC\u666F\u4E0B\u3002\u8FD9\u7BC7\u6587\u7AE0\u7684\u8303\u56F4\u5C06\u5305\u542B\u4E24\u4E2A\u90E8\u5206\uFF1A</p><ul><li>Streaming 101 \u56DE\u987E\uFF1A\u7B80\u5355\u56DE\u987E\u4E00\u4E0B Streaming \u4E2D\u4ECB\u7ECD\u7684\u6982\u5FF5\uFF0C\u5E76\u6DFB\u52A0\u4E86\u4E00\u4E2A\u8FD0\u884C\u793A\u4F8B\u6765\u7A81\u51FA\u91CD\u70B9</li><li>Streaming 102\uFF1AStreaming 101 \u7684\u914D\u5957\u6587\u7AE0\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5728\u5904\u7406\u65E0\u754C\u6570\u636E\u65F6\u5F88\u91CD\u8981\u7684\u5176\u4ED6\u6982\u5FF5\uFF0C\u5E76\u7EE7\u7EED\u4F7F\u7528\u5177\u4F53\u793A\u4F8B\u4F5C\u4E3A\u89E3\u91CA\u5B83\u4EEC\u7684\u5DE5\u5177</li></ul><p>\u5F53\u6211\u4EEC\u5B8C\u6210\u65F6\uFF0C\u6211\u4EEC\u5C06\u6DB5\u76D6\u6211\u8BA4\u4E3A\u662F\u7A33\u5065\u7684<mark>\u65E0\u5E8F\u6570\u636E\u5904\u7406\u6240\u9700\u7684\u6838\u5FC3\u539F\u5219\u548C\u6982\u5FF5\u96C6</mark>\u3002\u8FD9\u4E9B\u65F6\u95F4\u63A8\u7406\u7684\u5DE5\u5177\uFF0C\u5C06\u771F\u6B63\u7684\u8BA9\u60A8\u8D85\u8D8A\u7ECF\u5178\u7684\u6279\u5904\u7406\u3002</p><p>\u4E3A\u4E86\u8BA9\u60A8\u4E86\u89E3\u4ED6\u4EEC\u5728\u884C\u52A8\u4E2D\u7684\u6837\u5B50\uFF0C\u6211\u5C06\u4F7F\u7528 <a href="https://github.com/GoogleCloudPlatform/DataflowJavaSDK" target="_blank" rel="noopener noreferrer">Dataflow SDK</a> \u7684\u4EE3\u7801\u7247\u6BB5(i.e., \u7528\u4E8E <a href="https://cloud.google.com/dataflow/" target="_blank" rel="noopener noreferrer">Google Cloud Dataflow</a> \u7684 API)\uFF0C\u52A0\u4E0A\u52A8\u753B\u4EE5\u63D0\u4F9B\u6982\u5FF5\u7684\u89C6\u89C9\u8868\u73B0\u3002\u6211\u4F7F\u7528 Dataflow SDK \u800C\u4E0D\u662F\u4EBA\u4EEC\u53EF\u80FD\u66F4\u719F\u6089\u7684\u4E1C\u897F(\u6BD4\u5982\uFF0CSpark Streaming \u6216\u8005 Storm)\u7684\u539F\u56E0\u662F\u5B9E\u9645\u4E0A\u6CA1\u6709\u5176\u4ED6\u7CFB\u7EDF\u53EF\u4EE5\u4E3A\u6211\u60F3\u8981\u6DB5\u76D6\u7684\u6240\u6709\u793A\u4F8B\u63D0\u4F9B\u6240\u9700\u7684\u8868\u73B0\u529B\u3002\u597D\u6D88\u606F\u662F\uFF0C\u5176\u4ED6\u7CFB\u7EDF\u4E5F\u5F00\u59CB\u671D\u8FD9\u4E2A\u65B9\u5411\u53D1\u5C55\u3002\u66F4\u597D\u7684\u6D88\u606F\u662F\uFF0C\u6211\u4EEC(Google)\u4ECA\u5929\u5411 Apache \u8F6F\u4EF6\u57FA\u91D1\u4F1A\u63D0\u4EA4\u4E86\u4E00\u4EFD\u63D0\u6848\uFF0C\u4EE5\u521B\u5EFA\u4E00\u4E2A Apache Dataflow \u5B75\u5316\u5668\u9879\u76EE(\u4E0E data Artisans\u3001Cloudera\u3001Talend \u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u516C\u53F8\u5408\u4F5C)\uFF0C\u5E0C\u671B\u56F4\u7ED5 <a href="http://www.vldb.org/pvldb/vol8/p1792-Akidau.pdf" target="_blank" rel="noopener noreferrer">Dataflow Model</a> \u63D0\u4F9B\u7684\u5F3A\u5927\u7684\u4E71\u5E8F\u5904\u7406\u8BED\u4E49\u5EFA\u7ACB\u4E00\u4E2A\u5F00\u653E\u7684\u793E\u533A\u548C\u751F\u6001\u7CFB\u7EDF\u3002\u8FD9\u5E94\u8BE5\u662F\u4E00\u4E2A\u975E\u5E38\u6709\u8DA3\u7684 2016 \u5E74\u3002<s>\u6211\u79BB\u9898\u4E86</s>\u3002</p><p>\u8FD9\u7BC7\u6587\u7AE0\u4E2D\u7F3A\u5C11\u7684\u662F\u6211\u4E0A\u6B21\u627F\u8BFA\u7684\u6BD4\u8F83\u90E8\u5206\u3002\u6211\u4F4E\u4F30\u4E86\u6211\u60F3\u5728\u8FD9\u7BC7\u6587\u7AE0\u4E2D\u5305\u542B\u591A\u5C11\u5185\u5BB9\uFF0C\u4EE5\u53CA\u6211\u9700\u8981\u591A\u5C11\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u3002\u5728\u8FD9\u4E00\u70B9\u4E0A\uFF0C\u6211\u5B9E\u5728\u4E0D\u60F3\u770B\u5230\u4E3A\u4E86\u9002\u5E94\u8FD9\u4E00\u90E8\u5206\u800C\u8FDB\u4E00\u6B65\u62D6\u5EF6\u548C\u5EF6\u4F38\u7684\u4E8B\u60C5\u3002\u5982\u679C\u53F3\u4EC0\u4E48\u5B89\u6170\u7684\u8BDD\uFF0C\u6211\u6700\u540E\u5728 Strata + Hadoop World Singapore 2015 \u4E0A\u505A\u4E86\u4E00\u4E2A\u5927\u89C4\u6A21\u6570\u636E\u5904\u7406\u7684\u6F14\u53D8(The evolution of massive-scale data processing)\u7684\u6F14\u8BB2(\u5E76\u4E14\uFF0C\u5C06\u57286\u6708\u4EFD\u7684 Strata + Hadoop World Singapore 2016 \u4E0A\u7ED9\u51FA\u5B83\u7684\u66F4\u65B0\u7248\u672C)\uFF0C\u8FD9\u91CC\u9762\u4F1A\u63D0\u4F9B\u7F3A\u5931\u7684\u6BD4\u8F83\u90E8\u5206\u7684\u8D44\u6599\u3002\u5E7B\u706F\u7247\u975E\u5E38\u7CBE\u7F8E\uFF0C<a href="https://docs.google.com/presentation/d/10vs2PnjynYMtDpwFsqmSePtMnfJirCkXcHZ1SkwDg-s/present?slide=id.gd50fd6f86_0_224" target="_blank" rel="noopener noreferrer">\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230</a>\u4F9B\u60A8\u9605\u8BFB\u3002<s>Not quite the same, to be sure, but it\u2019s something.</s></p><p>\u73B0\u5728\uFF0C\u7EE7\u7EED streaming (\u7684\u8BDD\u9898)\u3002</p><h2 id="_2-\u56DE\u987E\u548C\u8DEF\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-\u56DE\u987E\u548C\u8DEF\u7EBF\u56FE" aria-hidden="true">#</a> 2. \u56DE\u987E\u548C\u8DEF\u7EBF\u56FE</h2><p>\u5728 Streaming 101 \u4E2D\uFF0C\u6211\u9996\u5148\u6F84\u6E05\u4E86\u4E00\u4E9B\u672F\u8BED\u3002\u6211\u9996\u5148\u533A\u5206\u4E86<mark>\u6709\u754C\u6570\u636E</mark>\u548C<mark>\u65E0\u754C\u6570\u636E</mark>\u3002\u6709\u754C\u6570\u636E\u6E90\u7684\u5927\u5C0F\u662F\u6709\u9650\u7684\uFF0C\u901A\u5E38\u88AB\u79F0\u4E3A&quot;\u6279\u91CF&quot;\u6570\u636E\u3002\u65E0\u754C\u6570\u636E\u53EF\u80FD\u5177\u6709\u65E0\u9650\u5927\u5C0F\uFF0C\u5E76\u4E14\u901A\u5E38\u88AB\u79F0\u4E3A&quot;\u6D41\u5F0F&quot;\u6570\u636E\u3002\u6211\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u672F\u8BED\u6279\u5904\u7406\u548C\u6D41\u5F0F\u5904\u7406\u6765\u6307\u4EE3\u6570\u636E\u6E90\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u540D\u79F0\u5E26\u6709\u67D0\u4E9B\u5177\u6709\u8BEF\u5BFC\u6027\u4E14\u901A\u5E38\u5177\u6709\u9650\u5236\u6027\u7684\u542B\u4E49\u3002</p><p>\u7136\u540E\u6211\u7EE7\u7EED\u5B9A\u4E49\u6279\u5904\u7406\u5F15\u64CE\u548C\u6D41\u5F0F\u5904\u7406\u5F15\u64CE\u4E4B\u95F4\u7684\u533A\u522B\uFF1A\u6279\u5904\u7406\u5F15\u64CE\u662F\u90A3\u4E9B\u5728\u8BBE\u8BA1\u65F6\u53EA\u8003\u8651\u6709\u754C\u6570\u636E\u7684\u5F15\u64CE\uFF0C\u800C\u6D41\u5F0F\u5F15\u64CE\u662F\u5728\u8BBE\u8BA1\u65F6\u8003\u8651\u5230\u65E0\u754C\u6570\u636E\u7684\u3002\u6211\u7684\u76EE\u6807\u662F\u5728\u63D0\u53CA\u6267\u884C\u5F15\u64CE\u65F6\u4EC5\u4F7F\u7528\u672F\u8BED batch \u548C streaming\u3002</p><p>\u5728\u672F\u8BED\u4E4B\u540E\uFF0C\u6211\u4ECB\u7ECD\u4E86\u4E0E\u5904\u7406\u65E0\u754C\u6570\u636E\u76F8\u5173\u7684\u4E24\u4E2A\u91CD\u8981\u7684\u57FA\u672C\u6982\u5FF5\u3002\u6211\u9996\u5148\u5EFA\u7ACB\u4E86\u4E8B\u4EF6\u65F6\u95F4(\u4E8B\u4EF6\u53D1\u751F\u7684\u4E8B\u4EF6)\u548C\u5904\u7406\u65F6\u95F4(\u5728\u5904\u7406\u8FC7\u7A0B\u4E2D\u89C2\u5BDF\u5230\u7684\u65F6\u95F4)\u4E4B\u95F4\u7684\u5173\u952E\u533A\u522B\u3002\u8FD9\u4E3A Streaming 101 \u4E2D\u63D0\u51FA\u7684\u4E3B\u8981\u8BBA\u70B9\u4E4B\u4E00\u5960\u5B9A\u4E86\u57FA\u7840\uFF1A<mark>\u5982\u679C\u60A8\u5173\u5FC3\u6B63\u786E\u6027\u548C\u4E8B\u4EF6\u5B9E\u9645\u53D1\u751F\u7684\u4E0A\u4E0B\u6587\uFF0C\u5219\u5FC5\u987B\u5206\u6790\u76F8\u5BF9\u4E8E\u56FA\u6709\u4E8B\u4EF6\u65F6\u95F4\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u5728\u5206\u6790\u8FC7\u7A0B\u4E2D\u9047\u5230\u5B83\u4EEC\u7684\u5904\u7406\u65F6\u95F4</mark>\u3002</p><p>\u7136\u540E\u6211\u4ECB\u7ECD\u4E86\u7A97\u53E3\u5316\u7684\u6982\u5FF5(\u5373\uFF0C\u6CBF\u65F6\u95F4\u8FB9\u754C\u5212\u5206\u6570\u636E\u96C6)\uFF0C\u8FD9\u662F\u4E00\u79CD\u5E38\u7528\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5E94\u5BF9\u6280\u672F\u4E0A\u65E0\u754C\u6570\u636E\u6E90\u53EF\u80FD\u6C38\u8FDC\u4E0D\u4F1A\u7ED3\u675F\u7684\u4E8B\u5B9E\u3002\u4E00\u4E9B\u66F4\u7B80\u5355\u7684\u7A97\u53E3\u7B56\u7565\u793A\u4F8B\u662F\u56FA\u5B9A\u7A97\u53E3\u548C\u6ED1\u52A8\u7A97\u53E3\uFF0C\u4F46\u66F4\u590D\u6742\u7684\u7A97\u53E3\u7C7B\u578B\uFF0C\u4F8B\u5982 session(\u7A97\u53E3\u7531\u6570\u636E\u672C\u8EAB\u7684\u7279\u5F81\u5B9A\u4E49\uFF0C\u4F8B\u5982\uFF0C\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6355\u83B7\u6BCF\u4E2A\u7528\u6237\u7684\u6D3B\u52A8\u4F1A\u8BDD)\u4E5F\u53EF\u4EE5\u770B\u5230\u5E7F\u6CDB\u7684\u7528\u6CD5\u3002</p><p>\u9664\u4E86\u8FD9\u4E24\u4E2A\u6982\u5FF5\uFF0C\u6211\u4EEC\u73B0\u5728\u5C06\u4ED4\u7EC6\u7814\u7A76\u53E6\u5916\u4E09\u4E2A\u6982\u5FF5:</p><ul><li>Watermarks(\u6C34\u4F4D\u7EBF)\uFF1A\u6C34\u4F4D\u7EBF\u662F\u5173\u4E8E\u4E8B\u4EF6\u65F6\u95F4\u7684\u8F93\u5165\u5B8C\u6574\u6027\u7684\u6982\u5FF5\u3002\u65F6\u95F4\u503C\u4E3A X \u7684\u6C34\u5370\u8868\u793A\uFF1A&quot;\u5DF2\u89C2\u5BDF\u5230\u4E8B\u4EF6\u65F6\u95F4\u5C0F\u4E8E X \u7684\u6240\u6709\u8F93\u5165\u6570\u636E&quot;\u3002\u56E0\u6B64\uFF0C\u5F53\u89C2\u5BDF\u4E00\u4E2A\u6CA1\u6709\u5DF2\u77E5\u7EC8\u70B9\u7684\u65E0\u754C\u6570\u636E\u6E90\u65F6\uFF0C\u6C34\u4F4D\u7EBF\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u8FDB\u5EA6\u6307\u6807\u3002</li><li>Triggers(\u89E6\u53D1\u5668)\uFF1A\u89E6\u53D1\u5668\u662F\u4E00\u79CD\u673A\u5236\uFF0C\u7528\u4E8E\u58F0\u660E\u76F8\u5BF9\u4E8E\u67D0\u4E9B\u5916\u90E8\u4FE1\u53F7\u5B9E\u73B0\u7684\u7A97\u53E3\u4F55\u65F6\u8F93\u51FA\u3002\u89E6\u53D1\u5668\u5728\u9009\u62E9\u4F55\u65F6\u53D1\u51FA\u8F93\u51FA\u65F6\u63D0\u4F9B\u4E86\u7075\u6D3B\u6027\u3002\u5B83\u8FD8\u53EF\u4EE5\u5728\u7A97\u53E3\u6F14\u53D8\u65F6\u591A\u6B21\u89C2\u5BDF\u7A97\u53E3\u7684\u8F93\u51FA\u3002\u8FD9\u53C8\u4E3A\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u7EC6\u5316\u7ED3\u679C\u6253\u5F00\u4E86\u5927\u95E8\uFF0C\u5373\u5141\u8BB8\u5728\u6570\u636E\u5230\u8FBE\u65F6\u63D0\u4F9B\u63A8\u6D4B\u7ED3\u679C\u4EE5\u53CA\u5904\u7406\u4E0A\u6E38\u6570\u636E\uFF08\u4FEE\u8BA2\uFF09\u968F\u65F6\u95F4\u7684\u53D8\u5316\u6216\u76F8\u5BF9\u4E8E\u6C34\u5370\u8F83\u665A\u5230\u8FBE\u7684\u6570\u636E(\u4F8B\u5982\uFF0C\u79FB\u52A8\u573A\u666F\uFF0C\u5176\u4E2D\u67D0\u4EBA\u7684\u624B\u673A\u5728\u8BE5\u4EBA\u79BB\u7EBF\u65F6\u8BB0\u5F55\u5404\u79CD\u52A8\u4F5C\u53CA\u5176\u4E8B\u4EF6\u65F6\u95F4\uFF0C\u7136\u540E\u518D\u91CD\u65B0\u8FDE\u63A5\u65F6\u7EE7\u7EED\u4E0A\u4F20\u8FD9\u4E9B\u4E8B\u4EF6\u4EE5\u8FDB\u884C\u5904\u7406)</li><li>Accumulation(\u7D2F\u79EF)\uFF1A\u7D2F\u79EF\u6A21\u5F0F\u6307\u5B9A\u5728\u540C\u4E00\u7A97\u53E3\u4E2D\u89C2\u5BDF\u5230\u7684\u591A\u4E2A\u7ED3\u679C\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u8FD9\u4E9B\u7ED3\u679C\u53EF\u80FD\u5B8C\u5168\u8131\u8282\uFF0C\u5373\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u4EE3\u8868\u72EC\u7ACB\u7684\u589E\u91CF\uFF0C\u6216\u8005\u5B83\u4EEC\u4E4B\u95F4\u53EF\u80FD\u5B58\u5728\u91CD\u53E0\u3002\u4E0D\u540C\u7684\u7D2F\u79EF\u6A21\u5F0F\u5177\u6709\u4E0D\u540C\u7684\u8BED\u4E49\u548C\u4E0E\u4E4B\u76F8\u5173\u7684\u6210\u672C\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5728\u5404\u79CD\u7528\u4F8B\u4E2D\u627E\u5230\u9002\u7528\u6027\u3002</li></ul><p>\u6700\u540E\uFF0C\u56E0\u4E3A\u6211\u8BA4\u4E3A\u4E3A\u4E86\u4F7F\u7406\u89E3\u6240\u6709\u8FD9\u4E9B\u6982\u5FF5\u4E4B\u95F4\u7684\u5173\u7CFB\u53D8\u5F97\u66F4\u5BB9\u6613\uFF0C\u6211\u4EEC\u5C06\u5728\u56DE\u7B54\u56DB\u4E2A\u95EE\u9898\u7684\u7ED3\u6784\u4E2D\u91CD\u65B0\u5BA1\u89C6\u65E7\u7684\u95EE\u9898\u5E76\u63A2\u7D22\u65B0\u7684\u95EE\u9898\uFF0C\u6240\u6709\u6211\u63D0\u51FA\u7684\u8FD9\u4E9B\u5BF9\u6BCF\u4E2A\u65E0\u754C\u6570\u636E\u5904\u7406\u7684\u90FD\u81F3\u5173\u91CD\u8981\uFF1A</p><ul><li><strong><em>What</em> results are calculated?\uFF08\u8BA1\u7B97\u7ED3\u679C\u662F\u4EC0\u4E48\uFF09</strong> \u8FD9\u4E2A\u95EE\u9898\u7531 pipeline(\u7BA1\u9053) \u4E2D\u7684\u8F6C\u6362\u7C7B\u578B\u6765\u56DE\u7B54\u3002\u8FD9\u5305\u62EC\u4E86\u8BA1\u7B97\u603B\u548C\u3001\u6784\u5EFAhistograms\u3001\u8BAD\u7EC3\u673A\u5668\u5B66\u4E60\u6A21\u578B\u7B49\u7B49\u3002 \u8FD9\u672C\u8D28\u4E0A\u4E5F\u662F\u7ECF\u5178\u6279\u5904\u7406\u56DE\u7B54\u7684\u95EE\u9898\u3002</li><li><strong><em>Where</em> in event time are results calculated?\uFF08\u5728\u4E8B\u4EF6\u65F6\u95F4\u4E2D\uFF0C\u7ED3\u679C\u662F\u5728\u54EA\u91CC\u8BA1\u7B97\u7684\uFF09</strong> pipeline \u4E2D\u7684\u4E8B\u4EF6\u65F6\u95F4\u7A97\u53E3\u7684\u4F7F\u7528\u56DE\u7B54\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002\u8FD9\u5305\u62EC Streaming 101 \u4E2D\u7684\u7A97\u53E3\uFF08fixed\uFF0Csliding\uFF0C\u4EE5\u53CA session\uFF09\u5E38\u89C1\u793A\u4F8B\uFF0C\u6CA1\u6709\u7A97\u53E3\u6982\u5FF5\u7684\u7528\u4F8B\uFF08\u4F8B\u5982\uFF0CStreaming 101 \u4E2D\u63CF\u8FF0\u7684\u4E0E\u65F6\u95F4\u65E0\u5173\u7684\u5904\u7406\uFF1B\u7ECF\u5178\u7684\u6279\u5904\u7406\u901A\u5E38\u4E5F\u5C5E\u4E8E\u8FD9\u4E00\u7C7B\uFF09\u548C\u5176\u4ED6\u66F4\u590D\u6742\u7684\u7A97\u53E3\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF0C\u9650\u65F6\u62CD\u5356\u3002\u53E6\u5916\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u5C06\u8FDB\u5165\u65F6\u95F4\u6307\u5B9A\u4E3A\u8BB0\u5F55\u5230\u8FBE\u7CFB\u7EDF\u65F6\u7684\u4E8B\u4EF6\u65F6\u95F4\uFF0C\u90A3\u5B83\u4E5F\u53EF\u4EE5\u5305\u62EC\u5904\u7406\u65F6\u95F4\u7A97\u53E3\u3002</li><li><strong><em>When</em> in processing time are results materialized?\uFF08\u5728\u5904\u7406\u65F6\u95F4\u4E2D\uFF0C\u7ED3\u679C\u4EC0\u4E48\u65F6\u5019\u7269\u5316\u7684\uFF09</strong> \u8FD9\u4E2A\u95EE\u9898\u662F\u901A\u8FC7 Watermark(\u6C34\u4F4D\u7EBF) \u548C Triggers(\u89E6\u53D1\u5668) \u7684\u4F7F\u7528\u6765\u56DE\u7B54\u3002\u8FD9\u4E2A\u4E3B\u9898\u6709\u65E0\u9650\u7684\u53EF\u80FD\uFF0C\u4F46\u6700\u5E38\u89C1\u7684\u6A21\u5F0F\u662F\u4F7F\u7528 Watermark \u6765\u63CF\u7ED8\u7ED9\u5B9A\u7A97\u53E3\u7684\u8F93\u5165\u4F55\u65F6\u7ED3\u675F\uFF0C\u4F7F\u7528 Triggers \u5141\u8BB8\u6307\u5B9A\u65E9\u671F\u7ED3\u679C(\u5BF9\u4E8E\u5728\u7A97\u53E3\u5B8C\u6210\u4E4B\u524D\u53D1\u51FA\u7684\u63A8\u6D4B\u7ED3\u679C)\u548C\u6700\u7EC8\u7ED3\u679C(Watermark \u53EA\u662F\u5BF9\u5B8C\u6574\u6027\u60C5\u51B5\u7684\u4F30\u8BA1\uFF0C\u5728 Watermark \u58F0\u79F0\u7ED9\u5B9A\u7A97\u53E3\u7684\u8F93\u5165\u5B8C\u6210\u540E\uFF0C\u53EF\u80FD\u4F1A\u5230\u8FBE\u66F4\u591A\u8F93\u5165\u6570\u636E)</li><li><strong><em>How</em> do refinements of results relate?</strong> \u8FD9\u4E2A\u95EE\u9898\u7531\u6240\u4F7F\u7528\u7684\u7D2F\u79EF\u7C7B\u578B\u6765\u56DE\u7B54\uFF1A\u4E22\u5F03(\u7ED3\u679C\u90FD\u662F\u72EC\u7ACB\u4E14\u4E0D\u540C\u7684)\uFF0C\u7D2F\u79EF(\u540E\u6765\u7684\u7ED3\u679C\u5EFA\u7ACB\u5728\u5148\u524D\u7684\u7ED3\u679C\u4E4B\u4E0A)\uFF0C\u6216\u8005\u7D2F\u79EF\u5E76\u56DE\u6536(\u7D2F\u79EF\u503C\u548C\u5148\u524D\u89E6\u53D1\u7684\u503C\u7684\u56DE\u64A4\u90FD\u88AB\u53D1\u51FA)</li></ul><h2 id="_3-streaming-101-redux" tabindex="-1"><a class="header-anchor" href="#_3-streaming-101-redux" aria-hidden="true">#</a> 3. Streaming 101 redux</h2><p>\u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u56DE\u987E\u4E00\u4E0BStreaming 101\u4E2D\u4ECB\u7ECD\u7684\u4E00\u4E9B\u6982\u5FF5\uFF0C\u4F46\u8FD9\u4E00\u6B21\u5C06\u4E0E\u4E00\u4E9B\u8BE6\u7EC6\u7684\u793A\u4F8B\u4E00\u8D77\uFF0C\u8FD9\u4E9B\u793A\u4F8B\u5C06\u6709\u52A9\u4E8E\u4F7F\u8FD9\u4E9B\u6982\u5FF5\u66F4\u52A0\u5177\u4F53\u3002</p><h5 id="what-transformations-\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#what-transformations-\u8F6C\u6362" aria-hidden="true">#</a> What\uFF1Atransformations\uFF08\u8F6C\u6362\uFF09</h5><p>\u5728\u7ECF\u5178\u6279\u5904\u7406\u4E2D\u5E94\u7528\u7684\u8F6C\u6362\u56DE\u7B54\u4E86\u4E00\u4E2A\u95EE\u9898\uFF1A\u201CWhat results are calculated?\u201D\u5C3D\u7BA1\u8BB8\u591A\u4EBA\u53EF\u80FD\u5DF2\u7ECF\u719F\u6089\u7ECF\u5178\u7684\u6279\u5904\u7406\uFF0C\u6211\u4EEC\u4ECE\u8FD9\u5F00\u59CB\uFF0C\u5E76\u5728\u8FD9\u57FA\u7840\u4E0A\u6DFB\u52A0\u6240\u6709\u5176\u4ED6\u7684\u6982\u5FF5\u3002</p><p>\u5728\u672C\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u770B\u5230\u4E00\u4E2A\u793A\u4F8B\uFF1A\u5728\u753110\u4E2A\u503C\u7EC4\u6210\u7684\u7B80\u5355\u6570\u636E\u96C6\u4E0A\u6839\u636E Key \u8BA1\u7B97 Sum\u3002</p><p>\u5982\u679C\u60A8\u719F\u6089 Spark Streaming \u6216\u8005 Flink \u4E4B\u7C7B\u7684\u4E1C\u897F\uFF0C\u90A3\u4E48\u60A8\u5E94\u8BE5\u53EF\u4EE5\u76F8\u5BF9\u8F7B\u677E\u7684\u4E86\u89E3 Dataflow \u4EE3\u7801\u5728\u505A\u4EC0\u4E48\u3002\u4E3A\u4E86\u7ED9\u4F60\u4E00\u4E2A\u901F\u6210\u8BFE\u7A0B\uFF0CDataflow \u4E2D\u6709\u4E24\u4E2A\u57FA\u672C\u539F\u8BED\uFF1A</p><ul><li><code>PCollections</code>: \u5B83\u8868\u793A\u6570\u636E\u96C6\uFF08\u53EF\u80FD\u662F\u5927\u91CF\u6570\u636E\u96C6\uFF09\uFF0C\u53EF\u4EE5\u7528\u8FC7\u8FD9\u4E9B\u6570\u636E\u96C6\u6267\u884C\u5E76\u884C\u8F6C\u6362</li><li><code>PTransforms</code>: \u5B83\u5E94\u7528\u4E8E PCollections \u4EE5\u521B\u5EFA\u65B0\u7684 PCollections\u3002PTransforms \u53EF\u4EE5\u6267\u884C\u5143\u7D20\u7EA7\u522B\u7684\u8F6C\u6362\uFF0C\u53EF\u4EE5\u5C06\u591A\u4E2A\u5143\u7D20\u805A\u5408\u5728\u4E00\u8D77\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6 PTransform \u7684\u7EC4\u5408\u3002</li></ul><p><img src="'+c+`" alt=""></p><p>\u5982\u679C\u60A8\u53D1\u73B0\u81EA\u5DF1\u611F\u5230\u56F0\u60D1\uFF0C\u6216\u8005\u53EA\u662F\u60F3\u67E5\u9605\u53C2\u8003\u8D44\u6599\uFF0C\u53EF\u4EE5\u67E5\u770B<a href="https://cloud.google.com/dataflow/model/programming-model" target="_blank" rel="noopener noreferrer">DataflowJavaSDK\u6587\u6863</a>\u3002</p><p>\u4E3A\u4E86\u6211\u4EEC\u7684\u793A\u4F8B\uFF0C\u5047\u8BBE\u6211\u4EEC\u4ECE\u4E00\u4E2A\u540D\u4E3A <code>input</code>\uFF08\u5373\uFF0C\u4E00\u4E2A\u7531\u5B57\u7B26\u4E32\u548C\u6574\u6570\u7EC4\u6210\u7684 KV \u7684 PCollect\uFF09\u7684 <code>PCollection&lt;KV&lt;String, Integer&gt;&gt;</code> \u5F00\u59CB\uFF0C\u5728\u73B0\u5B9E\u4E16\u754C\u7684\u7BA1\u9053\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4ECE I/O \u6E90\u8BFB\u53D6\u539F\u59CB\u6570\u636E\uFF08\u5982\uFF1A\u65E5\u5FD7\u8BB0\u5F55\uFF09\u7684 PCollection \u6765\u83B7\u53D6\u6570\u636E\uFF0C\u7136\u540E\u901A\u8FC7\u5C06\u65E5\u5FD7\u8BB0\u5F55\u89E3\u6790\u4E3A\u9002\u5F53\u7684 KV \u952E\u503C\u5BF9\uFF0C\u5C06\u5176\u8F6C\u6362\u4E3A <code>PCollection&lt;KV&lt;String, Integer&gt;&gt;</code> \u3002\u4E3A\u4E86\u6E05\u695A\u8D77\u89C1\uFF0C\u5728\u7B2C\u4E00\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5C06\u4E3A\u6240\u6709\u8FD9\u4E9B\u6B65\u9AA4\u6DFB\u52A0\u4F2A\u4EE3\u7801\uFF0C\u4F46\u5728\u968F\u540E\u7684\u793A\u4F8B\u4E2D\uFF0C\u7701\u7565\u4E86I/O\u548C\u89E3\u6790\u90E8\u5206\u3002</p><p>\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u7B80\u5355\u5730\u4ECEI/O\u6E90\u8BFB\u5165\u6570\u636E\u3001\u89E3\u6790\u51FA\u56E2\u961F/\u5F97\u5206\u5BF9\u5E76\u8BA1\u7B97\u6BCF\u4E2A\u56E2\u961F\u5F97\u5206\u603B\u548C\u7684\u7BA1\u9053\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u7ED3\u679C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">PCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> raw <span class="token operator">=</span> <span class="token constant">IO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PCollection</span><span class="token generics"><span class="token punctuation">&lt;</span>KV<span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> input <span class="token operator">=</span> raw<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">ParDo</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ParseFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PCollection</span><span class="token generics"><span class="token punctuation">&lt;</span>KV<span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> scores <span class="token operator">=</span> input
  <span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Sum</span><span class="token punctuation">.</span><span class="token function">integersPerKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u63A5\u4E0B\u6765\u7684\u6240\u6709\u793A\u4F8B\uFF0C\u5728\u770B\u5230\u63CF\u8FF0\u6211\u4EEC\u5C06\u8981\u5206\u6790\u7684\u7BA1\u9053\u7684\u4EE3\u7801\u7247\u6BB5\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C06\u67E5\u770B\u5728\u5177\u4F53\u6570\u636E\u96C6\u4E0A\u6267\u884C\u8BE5\u7BA1\u9053\u7684\u52A8\u753B\u5448\u73B0\u3002\u66F4\u5177\u4F53\u5730\u8BF4\uFF0C\u6211\u4EEC\u5C06\u770B\u5230\u5728\u5355\u4E2A\u952E\u768410\u4E2A\u8F93\u5165\u6570\u636E\u4E0A\u6267\u884C\u7BA1\u9053\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1B\u5728\u4E00\u4E2A\u771F\u5B9E\u7684\u7BA1\u9053\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u60F3\u8C61\u7C7B\u4F3C\u7684\u64CD\u4F5C\u4F1A\u5728\u591A\u53F0\u673A\u5668\u4E0A\u5E76\u884C\u8FDB\u884C\uFF0C\u4F46\u662F\u4E3A\u4E86\u6211\u4EEC\u7684\u4F8B\u5B50\uFF0C\u4FDD\u6301\u7B80\u5355\u4F1A\u66F4\u6E05\u695A\u3002</p><p>\u6BCF\u4E2A\u52A8\u753B\u5728\u4E24\u4E2A\u7EF4\u5EA6\u4E0A\u7ED8\u5236\u8F93\u5165\u548C\u8F93\u51FA\uFF1A\u4E8B\u4EF6\u65F6\u95F4\uFF08\u5728X\u8F74\u4E0A\uFF09\u548C\u5904\u7406\u65F6\u95F4\uFF08\u5728Y\u8F74\u4E0A\uFF09\u3002\u56E0\u6B64\uFF0C\u7BA1\u9053\u89C2\u5BDF\u5230\u7684\u5B9E\u65F6\u4ECE\u4E0B\u5230\u4E0A\uFF0C\u5982\u7C97\u7684\u4E0A\u5347\u767D\u7EBF\u6240\u793A\u3002\u8F93\u5165\u662F\u5706\u5708\uFF0C\u5706\u5708\u5185\u7684\u6570\u5B57\u8868\u793A\u7279\u5B9A\u8BB0\u5F55\u7684\u503C\u3002\u5F53\u7BA1\u9053\u89C2\u5BDF\u5230\u5B83\u4EEC\u65F6\uFF0C\u5B83\u4EEC\u5F00\u59CB\u53D8\u7070\u5E76\u6539\u53D8\u989C\u8272\u3002</p><p>\u5F53\u7BA1\u9053\u89C2\u5BDF\u503C\u65F6\uFF0C\u5B83\u5728\u5176\u72B6\u6001\u4E0B\u7D2F\u79EF\u503C\uFF0C\u5E76\u6700\u7EC8\u5C06\u805A\u5408\u7ED3\u679C\u5177\u4F53\u5316\u4E3A\u8F93\u51FA\u3002\u72B6\u6001\u548C\u8F93\u51FA\u7531\u77E9\u5F62\u8868\u793A\uFF0C\u805A\u5408\u503C\u4F4D\u4E8E\u9876\u90E8\u9644\u8FD1\uFF0C\u77E9\u5F62\u8986\u76D6\u7684\u533A\u57DF\u8868\u793A\u7D2F\u79EF\u5230\u7ED3\u679C\u4E2D\u7684\u4E8B\u4EF6\u65F6\u95F4\u548C\u5904\u7406\u65F6\u95F4\u90E8\u5206\u3002\u5BF9\u4E8E\u6E05\u53551\u4E2D\u7684\u7BA1\u9053\uFF0C\u5F53\u5728\u7ECF\u5178\u7684\u6279\u5904\u7406\u5F15\u64CE\u4E0A\u6267\u884C\u65F6\uFF0C\u5B83\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A</p><p><img src="`+u+'" alt="\u7ECF\u5178\u6279\u5904\u7406"></p><p>\u7531\u4E8E\u8FD9\u662F\u4E00\u4E2A\u6279\u5904\u7406\u7BA1\u9053\uFF0C\u5B83\u4F1A\u7D2F\u79EF\u72B6\u6001\uFF0C\u76F4\u5230\u770B\u5230\u6240\u6709\u8F93\u5165\uFF08\u7531\u9876\u90E8\u7684\u7EFF\u8272\u865A\u7EBF\u8868\u793A\uFF09\uFF0C\u6B64\u65F6\uFF0C\u5B83\u4F1A\u4EA7\u751F51\u7684\u5355\u4E2A\u8F93\u51FA\u3002\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8BA1\u7B97\u4E86\u6240\u6709\u4E8B\u4EF6\u65F6\u95F4\u7684\u603B\u548C\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6CA1\u6709\u5E94\u7528\u4EFB\u4F55\u7279\u5B9A\u7684\u7A97\u53E3\u8F6C\u6362\uFF1B\u56E0\u6B64\uFF0C\u72B6\u6001\u548C\u8F93\u51FA\u77E9\u5F62\u8986\u76D6\u6574\u4E2AX\u8F74\u3002\u7136\u800C\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u5904\u7406\u4E00\u4E2A\u65E0\u754C\u6570\u636E\u6E90\uFF0C\u7ECF\u5178\u7684\u6279\u5904\u7406\u662F\u4E0D\u591F\u7684\uFF1B\u6211\u4EEC\u4E0D\u80FD\u7B49\u5F85\u8F93\u5165\u7ED3\u675F\uFF0C\u56E0\u4E3A\u5B83\u5B9E\u9645\u4E0A\u6C38\u8FDC\u4E0D\u4F1A\u7ED3\u675F\u3002\u6211\u4EEC\u60F3\u8981\u7684\u6982\u5FF5\u4E4B\u4E00\u662F\u7A97\u53E3\u5316\uFF0C\u8FD9\u662F\u6211\u4EEC\u5728Streaming 101\u4E2D\u5F15\u5165\u7684\u3002\u56E0\u6B64\uFF0C\u5728\u6211\u4EEC\u7B2C\u4E8C\u4E2A\u95EE\u9898\u80CC\u666F\u4E0B\uFF1A\u201CWhere in event time are results calculated?\u201D\uFF0C\u6211\u4EEC\u73B0\u5728\u5C06\u7B80\u8981\u56DE\u987E\u7A97\u53E3\u5316\u3002</p><h5 id="where-windowing-\u7A97\u53E3\u5316" tabindex="-1"><a class="header-anchor" href="#where-windowing-\u7A97\u53E3\u5316" aria-hidden="true">#</a> Where\uFF1Awindowing\uFF08\u7A97\u53E3\u5316\uFF09</h5><p>\u6B63\u5982\u4E0A\u6B21\u8BA8\u8BBA\u7684\uFF0C\u7A97\u53E3\u5316\u662F\u6CBF\u7740\u65F6\u95F4\u8FB9\u754C\u5206\u5272\u6570\u636E\u6E90\u7684\u8FC7\u7A0B\u3002\u5E38\u89C1\u7684\u7A97\u53E3\u7B56\u7565\u5305\u62EC\u56FA\u5B9A\u7A97\u53E3\u3001\u6ED1\u52A8\u7A97\u53E3\u548C\u4F1A\u8BDD\u7A97\u53E3</p><p><img src="'+d+`" alt="\u7A97\u53E3\u7B56\u7565\u6848\u4F8B"></p><p>\u4E3A\u4E86\u66F4\u597D\u5730\u4E86\u89E3\u7A97\u53E3\u5316\u5728\u5B9E\u8DF5\u4E2D\u7684\u6837\u5B50\uFF0C\u8BA9\u6211\u4EEC\u4F7F\u7528\u6574\u6570\u6C42\u548C\u7BA1\u9053\uFF0C\u5E76\u5C06\u5176\u7A97\u53E3\u5316\u4E3A\u56FA\u5B9A\u7684\u4E24\u5206\u949F\u7A97\u53E3\u3002\u4F7F\u7528Dataflow SDK\uFF0C\u66F4\u6539\u53EA\u662F\u7B80\u5355\u5730\u6DFB\u52A0\u4E86Window.into\u8F6C\u6362\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">PCollection</span><span class="token generics"><span class="token punctuation">&lt;</span>KV<span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> scores <span class="token operator">=</span> input
  <span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Window</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token class-name">FixedWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">standardMinutes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Sum</span><span class="token punctuation">.</span><span class="token function">integersPerKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u60F3\u4E00\u4E0B\uFF0CDataflow\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5728\u6279\u5904\u7406\u548C\u6D41\u5904\u7406\u4E2D\u90FD\u6709\u6548\u7684\u7EDF\u4E00\u6A21\u578B\uFF0C\u56E0\u4E3A\u4ECE\u8BED\u4E49\u4E0A\u8BB2\uFF0C\u6279\u5904\u7406\u5B9E\u9645\u4E0A\u53EA\u662F\u6D41\u5904\u7406\u7684\u4E00\u4E2A\u5B50\u96C6\u3002\u56E0\u6B64\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u5728\u6279\u5904\u7406\u5F15\u64CE\u4E0A\u6267\u884C\u6B64\u7BA1\u9053\uFF1B\u673A\u5236\u66F4\u4E3A\u7B80\u5355\uFF0C\u5F53\u6211\u4EEC\u5207\u6362\u5230\u6D41\u5F0F\u5F15\u64CE\u65F6\uFF0C\u5B83\u5C06\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E9B\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\u7684\u4E1C\u897F\u3002</p><p><img src="`+m+'" alt="\u6279\u5904\u7406\u4E0A\u7684\u7A97\u53E3\u6C42\u548C"></p><p>\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u8F93\u5165\u5728\u72B6\u6001\u4E2D\u7D2F\u79EF\uFF0C\u76F4\u5230\u5B83\u4EEC\u88AB\u5B8C\u5168\u6D88\u8D39\uFF0C\u7136\u540E\u4EA7\u751F\u8F93\u51FA\u3002\u7136\u800C\uFF0C\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u56DB\u4E2A\u8F93\u51FA\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u8F93\u51FA\uFF1A\u56DB\u4E2A\u4E24\u5206\u949F\u7684\u4E8B\u4EF6\u65F6\u95F4\u7A97\u53E3\uFF0C\u6BCF\u4E00\u4E2A\u90FD\u6709\u4E00\u4E2A\u8F93\u51FA</p><p>\u5728\u8FD9\u4E00\u70B9\u4E0A\uFF0C\u6211\u4EEC\u91CD\u65B0\u5BA1\u89C6\u4E86Streaming 101\u4E2D\u5F15\u5165\u7684\u4E24\u4E2A\u4E3B\u8981\u6982\u5FF5\uFF1A\u4E8B\u4EF6\u65F6\u95F4\u548C\u5904\u7406\u65F6\u95F4\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u7A97\u53E3\u3002</p><p>\u5982\u679C\u6211\u4EEC\u60F3\u66F4\u8FDB\u4E00\u6B65\uFF0C\u6211\u4EEC\u9700\u8981\u5F00\u59CB\u6DFB\u52A0\u672C\u8282\u5F00\u5934\u63D0\u5230\u7684\u65B0\u6982\u5FF5\uFF1AWatermarks\uFF08\u6C34\u4F4D\u7EBF\uFF09\u3001Triggers\uFF08\u89E6\u53D1\u5668\uFF09 \u548C Accumulation\uFF08\u7D2F\u79EF\uFF09\u3002</p><h2 id="streaming-102" tabindex="-1"><a class="header-anchor" href="#streaming-102" aria-hidden="true">#</a> Streaming 102</h2><p>\u6211\u4EEC\u521A\u521A\u89C2\u5BDF\u4E86\u6279\u5904\u7406\u5F15\u64CE\u4E0A\u7A97\u53E3\u7BA1\u9053\u7684\u6267\u884C\u60C5\u51B5\u3002\u4F46\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E0C\u671B\u7ED3\u679C\u7684\u5EF6\u8FDF\u66F4\u4F4E\uFF0C\u800C\u4E14\u6211\u4EEC\u8FD8\u5E0C\u671B\u80FD\u591F\u5904\u7406\u65E0\u8FB9\u754C\u6570\u636E\u6E90\u3002\u5207\u6362\u5230\u6D41\u5F0F\u5F15\u64CE\u662F\u671D\u7740\u6B63\u786E\u65B9\u5411\u8FC8\u51FA\u7684\u4E00\u6B65\uFF0C\u4F46\u5C3D\u7BA1\u6279\u5904\u7406\u5F15\u64CE\u6709\u4E00\u4E2A\u5DF2\u77E5\u7684\u70B9\uFF0C\u5373\u6BCF\u4E2A\u7A97\u53E3\u7684\u8F93\u5165\u90FD\u662F\u5B8C\u6574\u7684\uFF08i.e.\uFF0C\u4E00\u65E6\u6709\u754C\u8F93\u5165\u6E90\u4E2D\u7684\u6240\u6709\u6570\u636E\u90FD\u88AB\u6D88\u8017\u5B8C\uFF09\uFF0C\u4F46\u6211\u4EEC\u76EE\u524D\u7F3A\u4E4F\u4E00\u79CD\u7528\u65E0\u8FB9\u754C\u6570\u636E\u6E90\u786E\u5B9A\u5B8C\u6574\u6027\u7684\u5B9E\u7528\u65B9\u6CD5\u3002</p><h5 id="when-watermarks" tabindex="-1"><a class="header-anchor" href="#when-watermarks" aria-hidden="true">#</a> When\uFF1AWatermarks</h5><p>Watermarks \u662F\u8FD9\u4E2A\u95EE\u9898\u7B54\u6848\u7684\u524D\u534A\u90E8\u5206\uFF1A\u201CWhen in processing time are results materialized?\u201DWatermarks \u662F\u4E8B\u4EF6\u65F6\u95F4\u57DF\u4E2D\u8F93\u5165\u5B8C\u6574\u6027\u7684\u6982\u5FF5\u3002\u6362\u8A00\u4E4B\uFF0C\u5B83\u4EEC\u662F\u7CFB\u7EDF\u76F8\u5BF9\u4E8E\u4E8B\u4EF6\u6D41\u4E2D\u5904\u7406\u7684\u8BB0\u5F55\u7684\u4E8B\u4EF6\u65F6\u95F4\u6D4B\u91CF\u8FDB\u5EA6\u548C\u5B8C\u6574\u6027\u7684\u65B9\u5F0F\uFF08\u6709\u754C\u6216\u65E0\u754C\uFF0C\u5C3D\u7BA1\u5728\u65E0\u754C\u60C5\u51B5\u4E0B\u5B83\u4EEC\u7684\u6709\u7528\u6027\u66F4\u660E\u663E\uFF09\u3002</p><p>\u56DE\u60F3\u4E00\u4E0BStreaming 101\u4E2D\u7684\u8FD9\u5F20\u56FE\uFF0C\u5728\u8FD9\u91CC\u7A0D\u4F5C\u4FEE\u6539\uFF0C\u6211\u5C06\u4E8B\u4EF6\u65F6\u95F4\u548C\u5904\u7406\u65F6\u95F4\u4E4B\u95F4\u7684\u504F\u5DEE\u63CF\u8FF0\u4E3A\u5927\u591A\u6570\u771F\u5B9E\u4E16\u754C\u5206\u5E03\u5F0F\u6570\u636E\u5904\u7406\u7CFB\u7EDF\u4E2D\u4E0D\u65AD\u53D8\u5316\u7684\u65F6\u95F4\u51FD\u6570\u3002</p><p><img src="'+k+'" alt=""></p><p>\u4EE3\u8868\u73B0\u5B9E\u7684\u90A3\u6761\u873F\u8712\u7684\u7EA2\u7EBF\u672C\u8D28\u4E0A\u5C31\u662FWatermarks\uFF0C\u5B83\u6355\u83B7\u4E86\u968F\u7740\u5904\u7406\u65F6\u95F4\u7684\u63A8\u79FB\u4E8B\u4EF6\u65F6\u95F4\u5B8C\u6574\u6027\u7684\u8FDB\u5C55\u3002\u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u53EF\u4EE5\u5C06 Watermarks \u89C6\u4E3A\u4E00\u4E2A\u51FD\u6570F(P) -&gt; E\uFF0C\u5B83\u5728\u5904\u7406\u65F6\u95F4\u4E0A\u53D6\u4E00\u4E2A\u70B9\uFF0C\u5728\u4E8B\u4EF6\u65F6\u95F4\u4E0A\u8FD4\u56DE\u4E00\u4E2A\u70B9\uFF08\u66F4\u51C6\u786E\u5730\u8BF4\uFF0C\u51FD\u6570\u7684\u8F93\u5165\u5B9E\u9645\u4E0A\u662F\u89C2\u5BDF\u5230\u6C34\u5370\u7684\u7BA1\u9053\u70B9\u4E0A\u6E38\u6240\u6709\u4E8B\u7269\u7684\u5F53\u524D\u72B6\u6001\uFF1A\u8F93\u5165\u6E90\u3001\u7F13\u51B2\u6570\u636E\u3001\u6B63\u5728\u5904\u7406\u7684\u6570\u636E\u7B49\uFF1B\u4F46\u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u5C06\u5176\u89C6\u4E3A\u4ECE\u5904\u7406\u65F6\u95F4\u5230\u4E8B\u4EF6\u65F6\u95F4\u7684\u6620\u5C04\u66F4\u7B80\u5355\uFF09\u3002\u4E8B\u4EF6\u65F6\u95F4\u70B9E\u662F\u7CFB\u7EDF\u8BA4\u4E3A\u5DF2\u89C2\u5BDF\u5230\u4E8B\u4EF6\u65F6\u95F4\u5C0F\u4E8EE\u7684\u6240\u6709\u8F93\u5165\u7684\u65F6\u95F4\u70B9\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u8FD9\u662F\u4E00\u4E2A\u65AD\u8A00\uFF0C\u5373\u4E0D\u4F1A\u518D\u770B\u5230\u4E8B\u4EF6\u65F6\u95F4\u5C0F\u4E8EE\u7684\u6570\u636E\u3002\u6839\u636E Watermarks \u7684\u7C7B\u578B\uFF08\u51C6\u786E\u7684\u6216\u542F\u53D1\u5F0F\u7684\uFF09\uFF0C\u8BE5\u65AD\u8A00\u53EF\u4EE5\u662F\u4E25\u683C\u7684\u4FDD\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6709\u6839\u636E\u7684\u731C\u6D4B\uFF1A</p><ul><li><strong>Perfect Watermarks\uFF08\u51C6\u786E\u7684\u6C34\u4F4D\u7EBF\uFF09</strong>: \u5728\u6211\u4EEC\u5B8C\u5168\u4E86\u89E3\u6240\u6709\u8F93\u5165\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u6709\u53EF\u80FD\u6784\u5EFA\u4E00\u4E2A\u786E\u5207\u7684\u6C34\u4F4D\u7EBF\uFF1B\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5B58\u5728\u5EF6\u8FDF\u6570\u636E\uFF1B\u6240\u6709\u6570\u636E\u90FD\u5F88\u65E9\u6216\u51C6\u65F6</li><li><strong>Heuristic Watermarks\uFF08\u542F\u53D1\u5F0F\u7684\u6C34\u4F4D\u7EBF\uFF09</strong>: \u5BF9\u4E8E\u8BB8\u591A\u5206\u5E03\u5F0F\u8F93\u5165\u6E90\uFF0C\u5B8C\u5168\u4E86\u89E3\u8F93\u5165\u6570\u636E\u662F\u4E0D\u5207\u5B9E\u9645\u7684\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53E6\u4E00\u4E2A\u6700\u4F73\u9009\u62E9\u662F\u63D0\u4F9B\u542F\u53D1\u5F0F\u6C34\u4F4D\u7EBF\u3002\u542F\u53D1\u5F0F\u6C34\u4F4D\u7EBF\u4F7F\u7528\u5173\u4E8E\u8F93\u5165\u7684\u4EFB\u4F55\u53EF\u7528\u4FE1\u606F\uFF08\u5206\u533A\u3001\u5206\u533A\u5185\u7684\u6392\u5E8F\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3001\u6587\u4EF6\u7684\u589E\u957F\u7387\u7B49\uFF09\u6765\u63D0\u4F9B\u5C3D\u53EF\u80FD\u51C6\u786E\u7684\u8FDB\u5EA6\u4F30\u8BA1\u3002\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u6837\u7684\u6C34\u4F4D\u7EBF\u5728\u9884\u6D4B\u4E2D\u53EF\u4EE5\u975E\u5E38\u51C6\u786E\u3002\u5373\u4F7F\u5982\u6B64\uFF0C\u4F7F\u7528\u542F\u53D1\u5F0F\u6C34\u4F4D\u7EBF\u4E5F\u610F\u5473\u7740\u5B83\u6709\u65F6\u53EF\u80FD\u662F\u9519\u8BEF\u7684\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u6570\u636E\u5EF6\u8FDF\u3002\u6211\u4EEC\u5C06\u5728\u4E0B\u9762\u7684\u89E6\u53D1\u5668\u90E8\u5206\u4E86\u89E3\u5904\u7406\u5EF6\u8FDF\u6570\u636E\u7684\u65B9\u6CD5\u3002</li></ul>',54),v={class:"custom-container tip"},w={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},S=a("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),b=a("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),W=[S,b],x=a("p",{class:"custom-container-title"},"\u4EBA\u751F\u5F97\u610F\u987B\u5C3D\u6B22",-1),P=a("p",null,"\u8FD9\u4E00\u523B\uFF0C\u6211\u89C9\u5F97\u7FFB\u8BD1\u5931\u53BB\u4E86\u610F\u4E49\uFF0C\u6211\u4E0D\u60F3\u7FFB\u4E86\uFF01\u81EA\u884C\u67E5\u770B\u539F\u6587\u5427\u3002",-1);function C(D,y){const t=o("LinkCard");return n(),s("div",null,[h,p(t,{title:"Streaming 102",link:"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-102/",icon:"",image:"",siteDomain:"false"},{default:r(()=>[f]),_:1}),_,a("div",v,[(n(),s("svg",w,W)),x,P])])}var T=e(g,[["render",C],["__file","index.html.vue"]]);export{T as default};