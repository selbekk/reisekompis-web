<section class="section">
    <p>{{ description }}</p>
    {{#if stops.length }}
    <div class="my-stops">
        {{#each stops}}
            <article class="stop">
                <h1>{{ name }}</h1>
                Linjer: <span class="lines">{{ lineString }}</span>
            </article>
        {{/each}}
    </div>
    {{else}}
    <div class="no-stops">
        {{{ noStopsDescription }}}
    </div>
    {{/if}}


</section>