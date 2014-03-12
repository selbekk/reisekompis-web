<section class="search-results section">
    {{#each .}}
    <article class="stop {{selected}}" id="stop-{{id}}">
        <h1>{{name}}</h1>
        Linjer: <span class="lines">{{lineString}}</span>
    </article>
    {{/each}}
</section>
